import React from 'react';

export enum ModuleId {
  DASHBOARD = 'dashboard',
  ORIENTATION = 'orientation',
  MARKET_INSIGHTS = 'market_insights',
  BUSINESS_SETUP = 'business_setup',
  PRICING = 'pricing',
  AIRBNB_MASTERY = 'airbnb_mastery',
  MARKETING = 'marketing',
  LOCAL_SEO = 'local_seo',
  OPERATIONS = 'operations',
  RISK_MANAGEMENT = 'risk_management',
  ACTION_PLAN = 'action_plan',
}

export interface NavItem {
  id: ModuleId;
  label: string;
  icon: React.ReactNode;
}

export interface Competitor {
  name: string;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
}