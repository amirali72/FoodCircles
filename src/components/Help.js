import { useState } from "react"

const Section = ({title, description}) => {
    const [isVisible, setIsVisible] = useState(false);
    return(
    <div className="faq-card">
        <div className="faq-card-upper">
            <h3>{title}</h3>
            {isVisible?
            <button onClick={()=>{
                setIsVisible(false);
            }}>-</button>:
            <button onClick={()=>{
                setIsVisible(true);
            }}>+</button>
            
            }
        </div>

        {isVisible &&
        <p>{description}</p>}
    </div>
    )
}

const Help = () => {
    return (
        <div className="flex">
            <h1> <u>FAQS</u></h1>

            <Section title={"What is FoodCircles Customer Care Number?"} 
            description={"We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@FoodCircles.in"} key={1}/>

            <Section title={"Will FoodCircles be accountable for quality/quantity?"} 
            description={"Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."} key={2}/>

            <Section title={"Is there a minimum order value?"} 
            description={"We have no minimum order value and you can order for any amount. "} key={3}/>

            <Section title={"Do you charge for delivery?"} 
            description={"Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. "} key={4}/>

            <Section title={"Do you support bulk orders?"} 
            description={"In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply."} key={5}/>

            <Section title={"Did not receive referral coupon?"} 
            description={"Referral coupon is given upon the first successful transaction of the referred person. If you still have not received it, kindly send us your details at support@FoodCircles.in. We will contact you within 48 hours."} key={6}/>
                    
        </div>
    )
}

export default Help;