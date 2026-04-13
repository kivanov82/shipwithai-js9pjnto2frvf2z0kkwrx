import { type FC } from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import {
  LightbulbIcon,
  ShieldIcon,
  WifiIcon,
  HomeIcon,
} from '@/components/Icons';

const features = [
  {
    icon: LightbulbIcon,
    title: 'Smart Lighting',
    description: 'Set the perfect mood with color-changing bulbs that respond to your voice, schedule, or phone.',
  },
  {
    icon: ShieldIcon,
    title: 'Enhanced Security',
    description: 'Keep your home safe with smart cameras, door locks, and sensors that alert you instantly.',
  },
  {
    icon: WifiIcon,
    title: 'Always Connected',
    description: 'Control everything from anywhere. Get notifications and manage your home remotely.',
  },
  {
    icon: HomeIcon,
    title: 'Energy Efficient',
    description: 'Smart devices that learn your habits and optimize energy usage, saving you money.',
  },
];

export const FeaturesSection: FC = () => {
  return (
    <Section background="muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Smart Home?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join thousands of homeowners who’ve upgraded to a smarter, 
            more efficient, and secure living experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center group">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-50 text-sage-600 group-hover:bg-sage-100 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};