import FeatureItem from './FeatureItem';

const featuresData = [
  { icon: '🧠', title: 'AI Campaign Builder', desc: 'Launch campaigns in minutes.' },
  { icon: '📊', title: 'Smart Analytics', desc: 'Get insights in real-time.' },
  { icon: '⚙️', title: 'Workflow Automation', desc: 'Automate repetitive tasks.' },
  { icon: '💬', title: 'Chatbot Integration', desc: 'Engage users instantly.' },
  { icon: '📈', title: 'SEO Optimizer', desc: 'Boost organic traffic.' },
  { icon: '🌐', title: 'Omnichannel Ads', desc: 'Reach across platforms.' },
];

export default function Features() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-display font-bold mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {featuresData.map((feature, idx) => (
          <FeatureItem
            key={idx}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}
