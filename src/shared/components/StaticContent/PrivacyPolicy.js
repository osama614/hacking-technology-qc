import React, { useState, useEffect } from 'react';
import { Markup } from 'interweave';

import { getPolicyContent } from '../../../api/StaticContentApi';

const PrivacyPolicy = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getPolicyContent().then((res) => setContent(res.data.policy));
  }, []);

  return (
    <div className="container home px-0">
      <div className="privacy-policy">
        <Markup content={content} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
