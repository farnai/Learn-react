import styles from './AcordionCard.module.css'
import {useState} from "react";
import AccordionItem from './AccordionItem';
import contentAccordion from './accordionData.json';


function AccordionCard (){
    const [activeAccordionNumber, setActiveAccordionNumber] = useState (null);

    const handleClick = (accordionNumber) => {

        if (activeAccordionNumber === accordionNumber)
        {
            setActiveAccordionNumber (null);}
        else
            {
                setActiveAccordionNumber (accordionNumber);
            }
        }


        return <div className={styles.cardContainer}>
            {contentAccordion.map ((item) => (
                <AccordionItem
                    key={item.itemNumber}
                    activeAccordionNumber={activeAccordionNumber}
                    handleClick={handleClick}
                    itemNumber={item.itemNumber}
                    title={item.title}
                    content={item.content}
                />
            ))},
        </div>

}

export default AccordionCard;
