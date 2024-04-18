/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";

const MessageLayout = () => {
  // Define state to store conversation data
  const [conversations, setConversations] = useState([
    {
      name: "Lilly",
      lastSenderName: "Lilly",
      info: "Yes i can do it for you",
      src: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
    },
    {
      name: "Lilly",
      lastSenderName: "Lilly",
      info: "Yes i can do it for you",
      src: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
    },
    {
      name: "Lilly",
      lastSenderName: "Lilly",
      info: "Yes i can do it for you",
      src: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
    },
    {
      name: "Lilly",
      lastSenderName: "Lilly",
      info: "Yes i can do it for you",
      src: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
    },
    {
      name: "Lilly",
      lastSenderName: "Lilly",
      info: "Yes i can do it for you",
      src: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
    },
    {
      name: "Joe",
      lastSenderName: "Joe",
      info: "Yes i can do it for you",
      src: "https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg",
    },
  ]);

  const [activeConversation, setActiveConversation] = useState({
    name: "Joe",
    src: "https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg",
    info: "Active 10 mins ago",
  });

  const [messages, setMessages] = useState([
    { message: "Hello my friend", sentTime: "just now", sender: "Joe" },
  ]);

  const handleConversationClick = (conversation: {
    name: string;
    lastSenderName?: string;
    info?: string;
    src: string;
  }) => {
    setActiveConversation({
      name: conversation.name,
      src: conversation.src,
      info: "Active 5 mins ago",
    });
  };

  console.log(setConversations, setMessages);
  return (
    <div className="row mx-auto container ">
      <div className="col-md-4">
        <ConversationList>
          {conversations.map((conversation, index) => (
            <Conversation
              key={index}
              info={conversation.info}
              lastSenderName={conversation.lastSenderName}
              name={conversation.name}
              onClick={() => handleConversationClick(conversation)}
            >
              <Avatar name={conversation.name} src={conversation.src} />
            </Conversation>
          ))}
        </ConversationList>
      </div>

      <div className="col-md-8">
        <ConversationHeader>
          <ConversationHeader.Back />
          <Avatar name={activeConversation.name} src={activeConversation.src} />
          <ConversationHeader.Content
            info={activeConversation.info}
            userName={activeConversation.name}
          />
        </ConversationHeader>

        <MainContainer style={{ height: "500px" }}>
          <ChatContainer>
            <MessageList>
              {messages.map((message, index) => (
                <Message
                  key={index}
                  model={{
                    message: message.message,
                    sentTime: message.sentTime,
                    sender: message.sender,
                    direction: "incoming",
                    position: "first",
                  }}
                />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default MessageLayout;
