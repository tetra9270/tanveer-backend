import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import ShreddersImg from '../assets/shredders.png';
import AppShreddersImg from '../assets/application-shredders.png';
import LaminatorsImg from '../assets/binders-and-laminators.png';

const AntivaDetail = () => {
    const { category } = useParams();

    let headerContent = {
        image: ShreddersImg,
        title: 'ANTIVA Document Shredders',
        specs: 'Premium Office Solutions'
    };

    if (category === 'app-shredders') {
        headerContent = {
            image: AppShreddersImg,
            title: 'ANTIVA Multipurpose Application Shredders',
            specs: 'High-performance shredding for various materials'
        };
    } else if (category === 'laminators') {
        headerContent = {
            image: LaminatorsImg,
            title: 'ANTIVA Document Laminators & Binders',
            specs: 'Professional finish for your documents'
        };
    }

    return (
        <div className="product-detail-page container">
            <div className="product-detail-layout">
                {/* Left Column: Featured Product Image */}
                <div className="left-column">
                    <div className="featured-image-container">
                        <img src={headerContent.image} alt={headerContent.title} className="featured-image" />
                        <h2 className="featured-title">{headerContent.title}</h2>
                        <p className="featured-specs">{headerContent.specs}</p>
                    </div>
                </div>

                {/* Right Column: Key Features / Model Lists */}
                <div className="right-column">
                    <div className="models-grid">
                        {category === 'app-shredders' ? (
                            <>
                                <div className="model-category">
                                    <h3>Plastic Bottle Shredders</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-bs-300"><span>&gt;</span> ANTIVA BS 300 <span className="specs">(High Technology Document, Volumetric Material & Bottle Shredder cum Disentegrator)</span></Link></li>
                                        <li><Link to="/model/avanti-bs-300x"><span>&gt;</span> ANTIVA BS 300X <span className="specs">(Plastic Film Shredder)</span></Link></li>
                                        <li><Link to="/model/avanti-pws-300"><span>&gt;</span> ANTIVA PWS 300</Link></li>
                                        <li><Link to="/model/avanti-bs-400"><span>&gt;</span> ANTIVA BS 400</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>ANTIVA Brand - Industrial Multipurpose Shredder</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-bs-5620"><span>&gt;</span> ANTIVA BS 5620 <span className="specs">(INDUSTRIAL MULTIPURPOSE SHREDDER TWIN MOTOR)</span></Link></li>
                                        <li><Link to="/model/avanti-msw401"><span>&gt;</span> ANTIVA MSW401 <span className="specs">(Suitable for Shredding Polythene Bags, Synthetic Cloth & Cotton Cloth Waste)</span></Link></li>
                                        <li><Link to="/model/avanti-ms-400"><span>&gt;</span> ANTIVA MS 400 <span className="specs">(WOVEN BAG SHREDDER)</span></Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Multi Application Shredder with Hopper</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-es-5012"><span>&gt;</span> ANTIVA ES 5012</Link></li>
                                        <li><Link to="/model/avanti-ps-409-hu"><span>&gt;</span> ANTIVA PS 409 HU</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Food Waste Shredder</h3>
                                    <ul><li><Link to="/model/avanti-fs-300"><span>&gt;</span> ANTIVA FS 300</Link></li></ul>
                                </div>

                                <div className="model-category">
                                    <h3>Glass Waste Shredder</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-bc-300"><span>&gt;</span> ANTIVA BC 300</Link></li>
                                        <li><Link to="/model/avanti-bc-400"><span>&gt;</span> ANTIVA BC 400</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Garden Waste Shredder</h3>
                                    <ul><li><Link to="/model/avanti-ms-4050"><span>&gt;</span> ANTIVA MS 4050</Link></li></ul>
                                </div>

                                <div className="model-category">
                                    <h3>E- Waste Shredder</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-ec-300-hdd-combo"><span>&gt;</span> ANTIVA EC 300 HDD COMBO</Link></li>
                                        <li><Link to="/model/avanti-es-400-hd-combo"><span>&gt;</span> ANTIVA ES 400 HD COMBO</Link></li>
                                        <li><Link to="/model/avanti-ews-4050"><span>&gt;</span> ANTIVA EWS 4050</Link></li>
                                        <li><Link to="/model/avanti-ews-5010"><span>&gt;</span> ANTIVA EWS 5010</Link></li>
                                        <li><Link to="/model/avanti-ews-5515"><span>&gt;</span> ANTIVA EWS 5515</Link></li>
                                        <li><Link to="/model/avanti-ews-5620"><span>&gt;</span> ANTIVA EWS 5620</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Laminate Shredder</h3>
                                    <ul><li><Link to="/model/avanti-ps-404-l"><span>&gt;</span> ANTIVA PS 404 L</Link></li></ul>
                                </div>

                                <div className="model-category">
                                    <h3>Large Format & Carton Box Shredders</h3>
                                    <ul><li><Link to="/model/avanti-ps-750"><span>&gt;</span> ANTIVA PS 750</Link></li></ul>
                                </div>

                                <div className="model-category">
                                    <h3>Cardboard Perforator & Shredder</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-cp-450"><span>&gt;</span> ANTIVA CP 450</Link></li>
                                        <li><Link to="/model/avanti-cp-450-v"><span>&gt;</span> ANTIVA CP 450 V</Link></li>
                                        <li><Link to="/model/avanti-cp-455"><span>&gt;</span> ANTIVA CP 455</Link></li>
                                        <li><Link to="/model/avanti-cp-455-v"><span>&gt;</span> ANTIVA CP 455 V</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Shredder with Segregator</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-mr-300"><span>&gt;</span> ANTIVA MR 300</Link></li>
                                        <li><Link to="/model/avanti-mr-302-ss"><span>&gt;</span> ANTIVA MR 302 SS</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Municipal Waste Shredder with Conveyer</h3>
                                    <ul><li><Link to="/model/avanti-msw401"><span>&gt;</span> ANTIVA MSW401 (See Industrial section)</Link></li></ul>
                                </div>

                                <div className="model-category">
                                    <h3>Compost Shredder</h3>
                                    <ul><li><Link to="/model/avanti-ms-202"><span>&gt;</span> ANTIVA MS 202</Link></li></ul>
                                </div>

                                <div className="model-category">
                                    <h3>Bio Medical Waste Shredder</h3>
                                    <ul>
                                        {/* Assuming models for this new category, or leaving placeholder if not provided */}
                                        {/* User didn't specify models for this category in the list, but it's in the category list */}
                                    </ul>
                                </div>
                            </>
                        ) : category === 'laminators' ? (
                            <>
                                <div className="model-category">
                                    <h3>Comb Binders</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-clp-21"><span>&gt;</span> AVANTI CLP 21</Link></li>
                                        <li><Link to="/model/avanti-clp-21-s"><span>&gt;</span> AVANTI CLP 21 S</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Spiral Binders</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-sb-340"><span>&gt;</span> AVANTI SB 340</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Roll Laminators</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-dl-685"><span>&gt;</span> AVANTI DL 685</Link></li>
                                        <li><Link to="/model/avanti-dl-1000"><span>&gt;</span> AVANTI DL 1000</Link></li>
                                    </ul>
                                </div>

                                <div className="model-category">
                                    <h3>Pouch Laminators</h3>
                                    <ul>
                                        <li><Link to="/model/avanti-dl-300"><span>&gt;</span> AVANTI DL 300</Link></li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Office and Desk Side Office Shredders */}
                                <div className="model-category">
                                    <h3>Office and Desk Side Office Shredders</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-225"><span>&gt;</span> ANTIVA PS 225 <span className="specs">(8 sheets/ strip cut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-225-e"><span>&gt;</span> ANTIVA PS 225 E <span className="specs">(12 sheets/ strip cut)</span></Link> <span className="tag">PRODUCT AVAILABLE ON <span className="gem">GeM</span></span></li>
                                    </ul>
                                </div>

                                {/* Departmental Office Shred Series */}
                                <div className="model-category">
                                    <h3>Departmental Office Shred Series</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-240"><span>&gt;</span> ANTIVA PS 240 <span className="specs">(28-32 sheets/ Strip Cut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-240-hd"><span>&gt;</span> ANTIVA PS 240 HD <span className="specs">(42-46 sheets/ Strip Cut)</span></Link> <span className="tag">PRODUCT AVAILABLE ON <span className="gem">GeM</span></span></li>
                                        <li><Link to="/model/antiva-ps-240-cc"><span>&gt;</span> ANTIVA PS 240 CC <span className="specs">(26-28 sheets/ Cross Cut)</span></Link> <span className="tag">PRODUCT AVAILABLE ON <span className="gem">GeM</span></span></li>
                                        <li><Link to="/model/antiva-ps-240-ccx"><span>&gt;</span> ANTIVA PS 240 CCX <span className="specs">(16-18 sheets/ Micro Cut)</span></Link> <span className="tag">PRODUCT AVAILABLE ON <span className="gem">GeM</span></span></li>
                                    </ul>
                                </div>

                                {/* Departmental Shredders */}
                                <div className="model-category">
                                    <h3>Departmental Shredders</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-300"><span>&gt;</span> ANTIVA PS 300 <span className="specs">(15 sheets/ strip cut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-300-cc"><span>&gt;</span> ANTIVA PS 300 CC <span className="specs">(18-20/ cross cut)</span></Link> <span className="tag">PRODUCT AVAILABLE ON <span className="gem">GeM</span></span></li>
                                        <li><Link to="/model/antiva-ps-300-hd"><span>&gt;</span> ANTIVA PS 300 HD <span className="specs">(27-30 sheets/ strip cut)</span></Link> <span className="tag">PRODUCT AVAILABLE ON <span className="gem">GeM</span></span></li>
                                    </ul>
                                </div>

                                {/* Heavy Duty Shredders */}
                                <div className="model-category">
                                    <h3>Heavy Duty Shredders</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-400"><span>&gt;</span> ANTIVA PS 400 <span className="specs">(30 sheets/ strip cut)</span></Link> <span className="tag">PRODUCT AVAILABLE ON <span className="gem">GeM</span></span></li>
                                        <li><Link to="/model/antiva-ps-403"><span>&gt;</span> ANTIVA PS 403 <span className="specs">(40 sheets/ strip cut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-306"><span>&gt;</span> ANTIVA PS 306 <span className="specs">(50 sheets/ strip cut)</span></Link></li>
                                    </ul>
                                </div>

                                {/* Departmental Heavy Duty Shredders */}
                                <div className="model-category">
                                    <h3>Departmental Heavy Duty Shredders</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-404"><span>&gt;</span> ANTIVA PS 404 <span className="specs">(55 sheets/ Stripcut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-404-cc"><span>&gt;</span> ANTIVA PS 404 CC <span className="specs">(70 sheets/ Crosscut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-407"><span>&gt;</span> ANTIVA PS 407 <span className="specs">(75 sheets/ Stripcut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-407-cc"><span>&gt;</span> ANTIVA PS 407 CC <span className="specs">(100 sheets/ Crosscut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-407-ccx"><span>&gt;</span> ANTIVA PS 407 CCX <span className="specs">(60 sheets/ Crosscut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-409"><span>&gt;</span> ANTIVA PS 409 <span className="specs">(95 sheets/ Stripcut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-409-cc"><span>&gt;</span> ANTIVA PS 409 CC <span className="specs">(125 sheets/ Crosscut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-409-ccx"><span>&gt;</span> ANTIVA PS 409 CCX <span className="specs">(80 sheets/ Crosscut)</span></Link></li>
                                    </ul>
                                </div>

                                {/* Departmental Heavy Duty Document Shredders With High Speed */}
                                <div className="model-category">
                                    <h3>Departmental Heavy Duty Document Shredders With High Speed & High Motor Power</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-4071"><span>&gt;</span> ANTIVA PS 4071 <span className="specs">(70 Sheets/ Stripcut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-4071-cc"><span>&gt;</span> ANTIVA PS 4071 CC <span className="specs">(95 Sheets/ Crosscut)</span></Link></li>
                                    </ul>
                                </div>

                                {/* High Capacity Departmental Heavy Duty */}
                                <div className="model-category">
                                    <h3>High Capacity Departmental Heavy Duty Document Shredders With High Speed and High Motor Power</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-4091"><span>&gt;</span> ANTIVA PS 4091 <span className="specs">(95 sheets/ Stripcut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-4091-cc"><span>&gt;</span> ANTIVA PS 4091 CC <span className="specs">(125 sheets/ Crosscut)</span></Link></li>
                                    </ul>
                                </div>

                                {/* Industrial Shredders */}
                                <div className="model-category">
                                    <h3>Industrial Shredders</h3>
                                    <ul>
                                        <li><Link to="/model/antiva-ps-409-hd"><span>&gt;</span> ANTIVA PS 409 HD <span className="specs">(100 sheets/ Strip Cut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-409-hdcc"><span>&gt;</span> ANTIVA PS 409 HDCC <span className="specs">(125 sheets/ Cross Cut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-500"><span>&gt;</span> ANTIVA PS 500 <span className="specs">(96 sheets/ Strip Cut)</span></Link></li>
                                        <li><Link to="/model/antiva-ps-500-cc"><span>&gt;</span> ANTIVA PS 500 CC <span className="specs">(125 sheets/ Cross Cut)</span></Link></li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AntivaDetail;
