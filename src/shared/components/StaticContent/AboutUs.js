import React, { useState, useEffect } from 'react';
import { Markup } from "interweave";

import { getAboutUsContent } from "../../../api/StaticContentApi";

const AboutUs = ()=>{

    const [content, setContent] = useState(null);

    useEffect(() => {
        getAboutUsContent().then(res => setContent(res.data.about_us));
    }, []);
    
    return(
        <div className="about-us">
            {
                <Markup content={content} />
            }
        </div>
    );
};

export default AboutUs;