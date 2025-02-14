import React, { FunctionComponent } from "react";
import Partners from "../partners/partners";
const IntegratedBySection: FunctionComponent = () => {
  return (
    <div className="relative py-16 flex items-center flex-col sm:flex-row mb-6">
      {/* Slider Container */}
      <Partners />
    </div>
  );
};

export default IntegratedBySection;
