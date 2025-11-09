import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Code2, ArrowRight, Github, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Vercel AI SDK</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <Zap className="w-3 h-3 mr-1" />
            Now supporting streaming responses
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Build Conversational UIs
            <br />
            with Modern React
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Vercel AI SDK provides a suite of React hooks and utilities to build powerful
            conversational streaming UIs that work with any AI provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <FileText className="w-5 h-5 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Modern AI Apps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build conversational AI interfaces with React and Next.js
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Real-time Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stream AI responses in real-time, providing users with immediate feedback
                  and a smooth conversational experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Code2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>React Hooks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Use simple, composable hooks like <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">useChat</code>
                  and <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">useCompletion</code> in your React components.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Multi-Provider Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Works seamlessly with OpenAI, Anthropic, Hugging Face, and other popular
                  AI providers. Switch providers without code changes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple. Typesafe. Powerful.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build complex AI interfaces with minimal code
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
                  <code className="text-sm">
{`"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map(m => (
          <div key={m.id} className="mb-4">
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          className="w-full px-4 py-2 border rounded"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your AI Chat Interface?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start building conversational UIs with the Vercel AI SDK today.
            Zero configuration, works everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              Read the Docs
              <FileText className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Vercel AI SDK. Built with Next.js and deployed on Vercel.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
