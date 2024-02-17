import { Accordion } from "react-bootstrap";

function Faq() {
  const faqs = [
    {
      question: "Is It FREE to create profile in E - Bibaho?",
      answer:
        "Absolutely. Creating a profile in E - Bibaho is completely FREE and no service charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.",
    },
    {
      question: "How can I create my profile on ebibaho.com?",
      answer:
        "It's very easy & simple.eate your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
    {
      question: "How can I create my profile on ebibaho.com?",
      answer:
        "It's very easy & simple. Justeate your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.eate your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services. click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
    {
      question: "How can I create my profile on ebibaho.com?",
      answer:
        "It's very easy & simple. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
  ];

  return (
    <div className="container py-4">
      <h3 className="text-center mb-3">
        Frequently <span className="text-info-emphasis">Asked Questions</span>
      </h3>
      <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            eventKey={index.toString()}
            className="border mb-2"
          >
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
