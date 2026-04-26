#!/usr/bin/env node
/**
 * ╔══════════════════════════════════════════════╗
 * ║     CLI Blog Writer — Write blogs from       ║
 * ║     the terminal without opening the admin!  ║
 * ╚══════════════════════════════════════════════╝
 *
 * Usage:  node cli-blog.js
 *
 * Make sure the backend server is running first:
 *   node server.js
 */

const readline = require('readline');
const http = require('http');
const https = require('https');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const API_URL = 'http://localhost:5000/api/blogs';

// ── Colors for terminal output ────────────────────────────────────────────────
const c = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    gray: '\x1b[90m',
    bgBlue: '\x1b[44m',
    bgGreen: '\x1b[42m',
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) => new Promise(resolve => rl.question(question, resolve));

const postBlog = (blogData) => {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify(blogData);
        const options = {
            hostname: 'localhost',
            port: 5000,
            path: '/api/blogs',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };

        const req = http.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 201 || res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Server responded with ${res.statusCode}: ${data}`));
                }
            });
        });

        req.on('error', (e) => {
            if (e.code === 'ECONNREFUSED') {
                reject(new Error('Cannot connect to backend. Make sure "node server.js" is running first!'));
            } else {
                reject(e);
            }
        });

        req.write(body);
        req.end();
    });
};

const printBanner = () => {
    console.log('\n' + c.cyan + c.bold);
    console.log('╔══════════════════════════════════════════════════╗');
    console.log('║      ✍️  CLI Blog Writer — Avanti Admin Tool      ║');
    console.log('╚══════════════════════════════════════════════════╝');
    console.log(c.reset);
    console.log(c.gray + '  Write and publish blog posts directly from the terminal.\n' + c.reset);
};

const collectMultilineContent = async () => {
    console.log(c.yellow + c.bold + '\n📝 Blog Content:' + c.reset);
    console.log(c.gray + '  • Type your content line by line');
    console.log('  • Press ENTER twice on an empty line to finish');
    console.log('  • Supports basic HTML: <b>bold</b>, <a href="url">link</a>, <h2>heading</h2>' + c.reset);
    console.log('');

    const lines = [];
    let emptyCount = 0;

    return new Promise((resolve) => {
        const contentRL = readline.createInterface({ input: process.stdin, output: process.stdout });
        process.stdout.write(c.cyan + '  > ' + c.reset);

        contentRL.on('line', (line) => {
            if (line.trim() === '') {
                emptyCount++;
                if (emptyCount >= 2) {
                    contentRL.close();
                    resolve(lines.join('\n'));
                    return;
                }
            } else {
                emptyCount = 0;
                lines.push(line);
            }
            if (emptyCount < 2) {
                process.stdout.write(c.cyan + '  > ' + c.reset);
            }
        });
    });
};

const main = async () => {
    printBanner();

    try {
        // ── Collect blog info ─────────────────────────────────────────────────
        console.log(c.blue + c.bold + '── Blog Details ─────────────────────────────────────────' + c.reset);

        const title = await ask(c.cyan + '  📌 Title: ' + c.reset);
        if (!title.trim()) { console.log(c.red + '  Title cannot be empty.' + c.reset); rl.close(); return; }

        const author = await ask(c.cyan + `  👤 Author [Admin]: ` + c.reset) || 'Admin';
        const today = new Date().toISOString().split('T')[0];
        const date = await ask(c.cyan + `  📅 Date [${today}]: ` + c.reset) || today;
        const image = await ask(c.cyan + '  🖼️  Image URL (optional): ' + c.reset);

        rl.close();

        // ── Collect content ───────────────────────────────────────────────────
        const content = await collectMultilineContent();
        if (!content.trim()) { console.log(c.red + '\n  Content cannot be empty.' + c.reset); process.exit(1); }

        // ── Preview ───────────────────────────────────────────────────────────
        console.log('\n' + c.magenta + c.bold + '── Preview ──────────────────────────────────────────────' + c.reset);
        console.log(c.bold + '  Title:  ' + c.reset + title);
        console.log(c.bold + '  Author: ' + c.reset + author);
        console.log(c.bold + '  Date:   ' + c.reset + date);
        console.log(c.bold + '  Image:  ' + c.reset + (image || '(none)'));
        console.log(c.bold + '  Content Preview: ' + c.reset + content.substring(0, 100) + (content.length > 100 ? '...' : ''));
        console.log('');

        const confirmRL = readline.createInterface({ input: process.stdin, output: process.stdout });
        const confirm = await new Promise(resolve => confirmRL.question(c.yellow + '  ✅ Publish this blog? (y/n): ' + c.reset, resolve));
        confirmRL.close();

        if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
            console.log(c.gray + '\n  Cancelled. Blog was NOT published.\n' + c.reset);
            process.exit(0);
        }

        // ── Publish ───────────────────────────────────────────────────────────
        console.log(c.gray + '\n  Publishing...' + c.reset);

        const blogData = {
            id: Date.now().toString(),
            title: title.trim(),
            author: author.trim(),
            date: date.trim(),
            image: image.trim(),
            content: content.trim()
        };

        const result = await postBlog(blogData);

        console.log('\n' + c.bgGreen + c.bold + '  ✅ Blog Published Successfully!  ' + c.reset);
        console.log(c.green + `  → Blog ID: ${result.id || result._id}` + c.reset);
        console.log(c.green + `  → View it at: http://localhost:5173/blog` + c.reset + '\n');

    } catch (err) {
        console.log('\n' + c.red + c.bold + '  ❌ Error: ' + c.reset + c.red + err.message + c.reset + '\n');
        process.exit(1);
    }
};

main();
