import React, { useState } from "react";
import "./Values.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
const Values = () => {
  return (
    <section className="v-wrapper" id="values">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
            <br /> We beleive a good place to live can make your life better
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion"
          >
            {data.map((item, i) => {
              const [className1,setClassName]= useState(null)
              return (
                <AccordionItem className={`accordion-item ${className1}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordion-btn">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText accordion-panel">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
