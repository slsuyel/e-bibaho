import { Collapse } from 'antd';

function Faq() {
  const { Panel } = Collapse;

  const faqs = [
    {
      question: 'Is It FREE to create profile in E - Ebibah?',
      answer:
        'Absolutely. Creating a profile in E - Bibaho is completely FREE and no service charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.',
    },
    {
      question: 'How can I create my profile on ebibah.com?',
      answer:
        "It's very easy & simple.eate your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
    {
      question: 'How can I create my profile on ebibah.com?',
      answer:
        "It's very easy & simple. Justeate your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.eate your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services.charge is required. Create your profile and enjoy the exciting services. click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
    {
      question: 'How can I create my profile on ebibah.com?',
      answer:
        "It's very easy & simple. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
    },
  ];

  return (
    <div
      className="container py-4 my-3 "
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h3 className="text-center mb-3">
        Frequently <span className="text-info-emphasis">Asked Questions</span>
      </h3>
      <Collapse accordion>
        {faqs.map((faq, index) => (
          <Panel header={faq.question} style={{ fontSize: '15px' }} key={index}>
            <p className="font-monospace">{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default Faq;
