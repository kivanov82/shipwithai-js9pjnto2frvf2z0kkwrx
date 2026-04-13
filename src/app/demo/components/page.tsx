'use client';

import { useState } from 'react';
import {
  Container,
  Section,
  Button,
  Card,
  Input,
  Badge,
  IconButton,
  Grid,
  FormGroup,
  Toast,
  Spinner,
  PriceDisplay,
  QuantitySelector,
  ShoppingCartIcon,
  Checkbox,
  RadioGroup,
  Select,
  Textarea,
  Breadcrumb
} from '@/components/ui';

export default function ComponentsDemo() {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  
  return (
    <Container>
      <Section>
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">UI Components Demo</h1>
        
        {/* Buttons */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Card>
        
        {/* Badges */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Badges</h2>
          <div className="flex gap-3 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Card>
        
        {/* Form Elements */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Form Elements</h2>
          <div className="space-y-6">
            <FormGroup>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            
            <FormGroup>
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                error
                helperText="Password must be at least 8 characters"
              />
            </FormGroup>
            
            <FormGroup>
              <Select
                label="Country"
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'ca', label: 'Canada' }
                ]}
                placeholder="Select a country"
              />
            </FormGroup>
            
            <FormGroup>
              <Textarea
                label="Message"
                placeholder="Enter your message"
                rows={4}
              />
            </FormGroup>
            
            <FormGroup>
              <Checkbox label="I agree to the terms and conditions" />
            </FormGroup>
            
            <FormGroup>
              <p className="text-sm font-medium text-neutral-700 mb-2">Choose an option:</p>
              <RadioGroup
                name="options"
                value={radioValue}
                onChange={setRadioValue}
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' }
                ]}
              />
            </FormGroup>
          </div>
        </Card>
        
        {/* E-commerce Components */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">E-commerce Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Price Display</h3>
              <div className="space-y-2">
                <PriceDisplay price={29.99} />
                <PriceDisplay price={19.99} originalPrice={39.99} />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Quantity Selector</h3>
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Shopping Cart Icon</h3>
              <div className="flex gap-4">
                <ShoppingCartIcon />
                <ShoppingCartIcon count={3} />
                <ShoppingCartIcon count={99} />
                <ShoppingCartIcon count={100} />
              </div>
            </div>
          </div>
        </Card>
        
        {/* Navigation */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Smart Lights' }
            ]}
          />
        </Card>
        
        {/* Feedback */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
          <div className="space-y-4">
            <div>
              <Button onClick={() => setShowToast(true)}>Show Toast</Button>
            </div>
            <div className="flex gap-4">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
          </div>
        </Card>
        
        {/* Icon Buttons */}
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Icon Buttons</h2>
          <div className="flex gap-4">
            <IconButton size="sm" aria-label="Small icon button">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </IconButton>
            <IconButton size="md" aria-label="Medium icon button">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </IconButton>
            <IconButton size="lg" aria-label="Large icon button">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </IconButton>
          </div>
        </Card>
      </Section>
      
      {showToast && (
        <Toast
          message="This is a success message!"
          variant="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </Container>
  );
}