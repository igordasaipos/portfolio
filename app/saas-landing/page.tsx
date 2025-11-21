'use client'

import { Hero } from '@/components/ui/hero'
import { Features } from '@/components/landing/features'
import { Stats } from '@/components/landing/stats'
import { Pricing } from '@/components/landing/pricing'
import { Testimonials } from '@/components/landing/testimonials'
import { FAQ } from '@/components/landing/faq'
import { CTA } from '@/components/landing/cta'
import { Footer } from '@/components/landing/footer'
import {
  Zap,
  Shield,
  Users,
  BarChart,
  Lock,
  Rocket,
} from 'lucide-react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'

export default function SaaSLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200/50 transition-all hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800/50 dark:hover:bg-zinc-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </motion.div>

      {/* Hero Section */}
      <Hero
        badge="Now in Public Beta"
        subtitle="The future of productivity"
        title={["Igor Pinheiro", "Product Designer", "web designer"]}
        description="Transform your workflow with our AI-powered platform. Collaborate seamlessly, automate tasks, and scale your business effortlessly."
        primaryAction={{
          label: 'Start Free Trial',
          href: '#pricing',
        }}
        secondaryAction={{
          label: 'Watch Demo',
          href: '#demo',
        }}
      />

      {/* Stats Section */}
      <Stats
        stats={[
          { value: '50000', label: 'Active Users', suffix: '+' },
          { value: '99', label: 'Uptime', suffix: '%' },
          { value: '150', label: 'Countries', suffix: '+' },
          { value: '4', label: 'Average Rating', suffix: '.9' },
        ]}
      />

      {/* Features Section */}
      <Features
        title="Everything you need to succeed"
        subtitle="Powerful features"
        features={[
          {
            icon: Zap,
            title: 'Lightning Fast',
            description:
              'Experience blazing-fast performance with our optimized infrastructure and edge network.',
          },
          {
            icon: Shield,
            title: 'Enterprise Security',
            description:
              'Bank-level encryption and security protocols to keep your data safe and compliant.',
          },
          {
            icon: Users,
            title: 'Team Collaboration',
            description:
              'Work together in real-time with built-in collaboration tools and shared workspaces.',
          },
          {
            icon: BarChart,
            title: 'Advanced Analytics',
            description:
              'Get deep insights into your data with powerful analytics and customizable dashboards.',
          },
          {
            icon: Lock,
            title: 'Privacy First',
            description:
              'Your data belongs to you. We never sell or share your information with third parties.',
          },
          {
            icon: Rocket,
            title: 'Rapid Deployment',
            description:
              'Get up and running in minutes with our one-click deployment and automated setup.',
          },
        ]}
      />

      {/* Pricing Section */}
      <Pricing
        title="Simple, transparent pricing"
        subtitle="Choose the plan that fits your needs"
        plans={[
          {
            name: 'Starter',
            price: '$9',
            period: '/month',
            description: 'Perfect for individuals and small teams',
            features: [
              'Up to 5 team members',
              '10 GB storage',
              'Basic analytics',
              'Email support',
              'Core features',
            ],
            cta: {
              label: 'Start Free Trial',
              href: '#signup',
            },
          },
          {
            name: 'Pro',
            price: '$29',
            period: '/month',
            description: 'For growing teams and businesses',
            features: [
              'Up to 25 team members',
              '100 GB storage',
              'Advanced analytics',
              'Priority support',
              'All features',
              'API access',
              'Custom integrations',
            ],
            cta: {
              label: 'Start Free Trial',
              href: '#signup',
            },
            popular: true,
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large organizations with specific needs',
            features: [
              'Unlimited team members',
              'Unlimited storage',
              'Custom analytics',
              '24/7 dedicated support',
              'Enterprise features',
              'SLA guarantee',
              'Custom contracts',
              'Dedicated account manager',
            ],
            cta: {
              label: 'Contact Sales',
              href: '#contact',
            },
          },
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials
        title="Loved by teams worldwide"
        subtitle="See what our customers have to say"
        testimonials={[
          {
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'TechCorp',
            content:
              'This platform transformed how we work. The productivity gains have been incredible, and the team loves using it every day.',
            rating: 5,
          },
          {
            name: 'Michael Chen',
            role: 'Product Manager',
            company: 'InnovateLab',
            content:
              'The best investment we made this year. The ROI was clear within the first month, and support has been outstanding.',
            rating: 5,
          },
          {
            name: 'Emily Rodriguez',
            role: 'CTO',
            company: 'DataFlow',
            content:
              'Security and performance were our top priorities. This platform exceeded our expectations on both fronts.',
            rating: 5,
          },
          {
            name: 'David Kim',
            role: 'Founder',
            company: 'StartupXYZ',
            content:
              'As a startup, we needed something that could scale with us. This platform has been perfect from day one.',
            rating: 5,
          },
          {
            name: 'Lisa Thompson',
            role: 'Director of Ops',
            company: 'GlobalCo',
            content:
              'The automation features alone have saved us countless hours. The analytics give us insights we never had before.',
            rating: 5,
          },
          {
            name: 'James Wilson',
            role: 'Lead Developer',
            company: 'CodeBase',
            content:
              'The API is well-documented and the integrations are seamless. Our dev team was productive from day one.',
            rating: 5,
          },
        ]}
      />

      {/* FAQ Section */}
      <FAQ
        title="Frequently asked questions"
        subtitle="Everything you need to know"
        items={[
          {
            question: 'How does the free trial work?',
            answer:
              'You can start a 14-day free trial with full access to all Pro features. No credit card required. At the end of the trial, choose a plan that works for you or continue with our free tier.',
          },
          {
            question: 'Can I change plans later?',
            answer:
              'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate billing to ensure fairness.',
          },
          {
            question: 'What payment methods do you accept?',
            answer:
              'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely.',
          },
          {
            question: 'Is my data secure?',
            answer:
              'Yes, security is our top priority. We use bank-level encryption, regular security audits, and comply with SOC 2, GDPR, and other industry standards. Your data is encrypted both in transit and at rest.',
          },
          {
            question: 'Do you offer refunds?',
            answer:
              'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with our service for any reason, contact us within 30 days for a full refund.',
          },
          {
            question: 'How does support work?',
            answer:
              'All plans include email support. Pro plans get priority support with faster response times, and Enterprise customers get 24/7 dedicated support with a dedicated account manager.',
          },
        ]}
      />

      {/* CTA Section */}
      <CTA
        title="Ready to get started?"
        description="Join thousands of teams already using our platform to build better products."
        primaryAction={{
          label: 'Start Free Trial',
          href: '#signup',
        }}
        secondaryAction={{
          label: 'Contact Sales',
          href: '#contact',
        }}
      />

      {/* Footer */}
      <Footer
        logo="YourSaaS"
        description="Building the future of productivity, one feature at a time."
        sections={[
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Security', href: '#security' },
              { label: 'Roadmap', href: '#roadmap' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#about' },
              { label: 'Blog', href: '#blog' },
              { label: 'Careers', href: '#careers' },
              { label: 'Contact', href: '#contact' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Documentation', href: '#docs' },
              { label: 'API Reference', href: '#api' },
              { label: 'Help Center', href: '#help' },
              { label: 'Community', href: '#community' },
            ],
          },
        ]}
        socialLinks={[
          { label: 'Twitter', href: 'https://twitter.com' },
          { label: 'GitHub', href: 'https://github.com' },
          { label: 'LinkedIn', href: 'https://linkedin.com' },
        ]}
      />
    </div>
  )
}
