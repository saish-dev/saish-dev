import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from '@google/genai';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm Saish's AI assistant. Ask me anything about my projects, experience, or skills.",
      timestamp: Date.now(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session on mount
    chatSessionRef.current = createChatSession();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        // Fallback or retry initialization
        chatSessionRef.current = createChatSession();
      }

      if (chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
        const text = result.text || "I'm having trouble thinking right now. Please try again.";

        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: text,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'model',
          text: "My AI brain isn't connected right now (API Key missing). Please check the configuration.",
          timestamp: Date.now()
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Sorry, I encountered an error connecting to the AI service.",
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div
        className={`pointer-events-auto glass bg-background/90 rounded-3xl shadow-2xl shadow-black/30 w-80 sm:w-96 overflow-hidden transition-all duration-300 origin-bottom-right transform mb-4 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none h-0'
          }`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-gradient-to-br from-accent to-accent2 rounded-lg">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-medium text-sm text-primary">Ask Portfolio AI</h3>
              <p className="text-xs text-secondary flex items-center">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-1.5"></span>
                Powered by Gemini
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondary hover:text-primary transition-colors p-1 rounded"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-primary text-background rounded-br-md'
                  : 'bg-muted border border-border text-primary rounded-bl-md'
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted border border-border rounded-2xl rounded-bl-md px-4 py-3 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-border">
          <div className="flex items-center space-x-2 rounded-xl border border-border px-3 py-2 focus-within:border-accent transition-colors">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about my experience..."
              className="flex-1 bg-transparent text-sm text-primary placeholder:text-secondary focus:outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={`p-1.5 rounded-lg transition-all ${inputValue.trim() && !isLoading
                ? 'bg-primary text-background hover:opacity-90'
                : 'bg-muted text-secondary cursor-not-allowed'
                }`}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent ${isOpen ? 'glass bg-background text-primary rotate-90' : 'bg-gradient-to-br from-accent to-accent2 text-white'
          }`}
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-background"></span>
        )}
      </button>
    </div>
  );
};

export default AIChatBot;