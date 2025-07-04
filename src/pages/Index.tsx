
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Mugume Charity Foundation - Transforming Lives in Uganda" 
        description="Mugume Charity Foundation uplifts vulnerable children and families in Uganda through education, healthcare, protection, and empowerment programs. Making a lasting difference since 2015."
        imageUrl="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        keywords={[
          'charity Uganda', 
          'children support', 
          'education Uganda', 
          'healthcare Uganda', 
          'child protection', 
          'family empowerment', 
          'nonprofit Uganda', 
          'vulnerable children', 
          'community development', 
          'donation Uganda',
          'Mugume Charity Foundation',
          'Uganda charity organization',
          'help children Uganda',
          'education support Uganda',
          'community programs Uganda',
          'humanitarian aid Uganda'
        ]}
        type="website"
      />
      <Hero />
      <Programs />
      <Impact />
    </PageLayout>
  );
};

export default Index;
