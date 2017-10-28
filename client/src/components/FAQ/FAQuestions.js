import React from "react";
import { Button, Input, Row} from 'react-materialize';
import "./FAQ.css";


const FAQ = () =>
<div>
    <div className="FAQcards">
        <div class="FAQquestion">What is Griarte?
            <span class="FAQanswer">          
                At Griarte, we are here to create the vision. Griarte's inspiration is best known as street fashion.
            </span>
        </div>
        <div class="FAQquestion">Where are we located?
            <span class="FAQanswer">
                Chapel Thrill, North Carolina
            </span>
        </div>
        <div class="FAQquestion">How do I track my order?
            <span class="FAQanswer">
                You will be notified when your item has been shipped. The email will include the tracking number and the link to see it.
            </span>
        </div>
        <div class="FAQquestion">How long will my order take to arrive? 
            <span class="FAQanswer">
                Typically, 5-8 business days for regular shipping and 3-5 business days for fast shipping.
            </span>
        </div>
        <div class="FAQquestion">Who can I contact to make returns?
            <span class="FAQanswer">
                You can email us at customerservice@griarte.com
            </span>
        </div>
        <div class="FAQquestion">How to change or cancel my order
            <span class="FAQanswer">
                To modify your order, such as adding an item or changing your address, please contact us at customerservice@griarte.com
            </span>
        </div> 
        <div class="FAQquestion">What are the return and exchange policies?
            <span class="FAQanswer">
                Returns are allowed within 30 days. Email customerservice@griarte.com and you will recieve a return stamp. Return stamp will be paid for by customer and taken out of refund.
            </span>
        </div>
    </div>
    <p id="faqQ">Frequently Asked Questions
        <i class="material-icons">arrow_forward</i>
    </p>z
    <Row className="faqMore">
        <p id="faqTop">
            Need to get in touch? Message us!
        </p>
            <Input type="text" label="Name" s={2}  />
            <Input type="email" label="Email" s={2} />
            <Input type="text" label="Message" s={6} />
            <br/>     
            <Button id="faqButton" waves='light'>Submit!</Button>
    </Row>
</div>

export default FAQ;
