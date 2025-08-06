'use client';
import { useState } from 'react';

export default function PricingCalculator() {
  const [campaigns, setCampaigns] = useState(10);
  const [teamSize, setTeamSize] = useState(5);
  const basePrice = 19;
  const campaignCost = 2;
  const teamCost = 5;
  const totalPrice = basePrice + Math.max(0, campaigns - 10) * campaignCost + Math.max(0, teamSize - 5) * teamCost;

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-display font-bold mb-8">Interactive Pricing Calculator</h2>
      <div className="max-w-xl mx-auto space-y-6 text-left">
        <label className="block">Campaigns: {campaigns}</label>
        <input type="range" min="5" max="50" value={campaigns} onChange={e => setCampaigns(+e.target.value)} className="w-full" />
        <label className="block">Team Size: {teamSize}</label>
        <input type="range" min="1" max="20" value={teamSize} onChange={e => setTeamSize(+e.target.value)} className="w-full" />
        <p className="text-3xl font-semibold">Estimated: <span className="text-primary">${totalPrice}/mo</span></p>
      </div>
    </section>
  );
}
