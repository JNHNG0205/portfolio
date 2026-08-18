'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface PersonalInfo {
  name: string;
  country: string;
  age: number;
}

export const Chatbot = ({ personalInfo }: { personalInfo: PersonalInfo }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
    setMessages([
      {
        role: 'assistant',
        content: `Hi there! I'm ${personalInfo.name}'s AI assistant. Ask me anything about him!`,
      },
    ]);
  }, [personalInfo.name]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          personalInfo,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-lg bg-foreground px-4 py-3 text-background shadow-[0_8px_32px_rgba(20,23,25,0.18)] transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={18} className="text-teal" />
        ) : (
          <>
            <MessageSquare size={18} className="text-teal" />
            <span className="type-meta">
              Ask me anything
            </span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[26rem] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border border-border bg-background shadow-[0_8px_32px_rgba(20,23,25,0.18)]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
            <p className="type-meta text-muted-foreground">
              {personalInfo.name}&apos;s AI Assistant
            </p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`type-body max-w-[85%] rounded-lg px-3 py-2 ${
                  message.role === 'user'
                    ? 'ml-auto bg-primary text-primary-foreground'
                    : 'mr-auto bg-secondary text-secondary-foreground'
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto max-w-[85%] rounded-lg bg-secondary px-3 py-2.5">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal"
                    style={{ animationDelay: '0.2s' }}
                  />
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal"
                    style={{ animationDelay: '0.4s' }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="type-body flex-1 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground focus-visible:border-teal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-md bg-primary px-3 text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
