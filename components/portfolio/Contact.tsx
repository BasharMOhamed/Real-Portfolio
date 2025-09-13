"use client";
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { Card } from "../ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const body = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life."
          gradient="bg-gradient-secondary"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-8 bg-glass border-2 backdrop-blur-sm shadow-test-hover transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Me</h3>
                  <p className="text-muted-foreground">
                    bashar.eg6645@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-glass border-2 backdrop-blur-sm shadow-test-hover transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Let's Chat</h3>
                  <p className="text-muted-foreground">
                    Available for freelance work
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <Card className="p-8 bg-glass border-2 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-muted/50 border-2"
                  required
                  name="firstName"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-muted/50 border-2"
                  required
                  name="lastName"
                />
              </div>
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-muted/50 border-2"
                required
                name="email"
              />
              <Input
                placeholder="Subject"
                className="bg-muted/50 border-2"
                name="subject"
                required
              />
              <Textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-muted/50 border-glass resize-none"
                required
                name="message"
              />
              <Button
                className="w-full group shadow-test-hover transition-all"
                disabled={loading}
                type="submit"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
