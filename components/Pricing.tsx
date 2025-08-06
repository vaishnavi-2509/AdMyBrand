import PricingCard from './PricingCard';

const pricingTiers = [
  { title: 'Starter', price: '$19/mo', features: ['Basic Analytics', '5 Campaigns', 'Email Support'] },
  { title: 'Pro', price: '$49/mo', features: ['Advanced Analytics', 'Unlimited Campaigns', 'Priority Support'] },
  { title: 'Enterprise', price: 'Contact Us', features: ['Custom Solutions', 'Dedicated Manager', '24/7 Support'] },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-display font-bold mb-12">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, idx) => (
          <PricingCard key={idx} {...tier} />
        ))}
      </div>
    </section>
  );
}