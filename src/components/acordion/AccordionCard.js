import styles from './AcordionCard.module.css'
import {useState} from "react";
import AccordionItem from './AccordionItem';

const contentAccordion = [
        {
            itemNumber: 1,
            title: "Accordion title",
            content: "111"
        },
        
    ]
;
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
                    activeAccordionNumber={activeAccordionNumber}
                    handleClick={handleClick}
                    itemNumber={1}
                    title="Accordion titile1"
                    content="111"
                />)
            )},a
            <AccordionItem
                activeAccordionNumber={activeAccordionNumber}
                handleClick={handleClick}
                itemNumber={1}
                title="Accordion titile1"
                content="111"
            />
            <AccordionItem
                activeAccordionNumber={activeAccordionNumber}
                handleClick={handleClick}
                itemNumber={2}
                title="Accordion titile2"
                content="222"
            />
            <AccordionItem
                activeAccordionNumber={activeAccordionNumber}
                handleClick={handleClick}
                itemNumber={3}
                title="Accordion title3"
                content="333"
            />
            <AccordionItem
                activeAccordionNumber={activeAccordionNumber}
                handleClick={handleClick}
                itemNumber={4}
                title="Accordion titil4"
                content="4"
            />
        </div>

}

export default AccordionCard;
