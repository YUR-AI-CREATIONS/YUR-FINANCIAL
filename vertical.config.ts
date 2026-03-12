import { VerticalConfig } from '../vertical.config';

const financial: VerticalConfig = {
  id: 'yur-financial',
  name: 'YUR Financial',
  tagline: 'AI-Powered Financial Modeling, Risk Analysis & Portfolio Intelligence',
  icon: '💰',
  primaryColor: '#1A237E',
  accentColor: '#FFD600',
  bgGradient: 'linear-gradient(135deg, #0D1B4A 0%, #1A237E 50%, #FFD600 100%)',
  systemInstruction: `You are YUR Financial, an enterprise-grade AI financial intelligence system. You build financial models, analyze risk exposure, optimize portfolios, and monitor regulatory changes. You understand DCF analysis, Monte Carlo simulations, Black-Scholes pricing, credit risk scoring, and portfolio theory. You produce institutional-quality financial reports, stress test scenarios, and compliance documentation. Always cite data sources and quantify uncertainty ranges.`,
  complianceStandards: [
    'SEC Regulations (10-K, 10-Q Reporting)',
    'SOX (Sarbanes-Oxley) Compliance',
    'Basel III/IV Capital Requirements',
    'GAAP / IFRS Accounting Standards',
    'Dodd-Frank Act Compliance',
    'AML/KYC Regulations',
    'FINRA Rules & Guidelines'
  ],
  agents: [
    {
      name: 'FINANCIAL_MODELER',
      role: 'Financial Modeling & Valuation Agent',
      systemPrompt: 'You build sophisticated financial models — DCF valuations, LBO models, merger models, revenue forecasts, and scenario analyses. Structure assumptions clearly, build sensitivity tables, and stress test key variables. Output models in standardized formats with audit trails. Support both startup and enterprise valuation methodologies.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'RISK_ANALYST',
      role: 'Risk Assessment & Stress Testing Agent',
      systemPrompt: 'You identify, quantify, and monitor financial risks — market risk (VaR, CVaR), credit risk (PD, LGD, EAD), operational risk, and liquidity risk. Run Monte Carlo simulations, historical stress tests, and scenario analyses. Generate risk heat maps, exposure reports, and early warning indicators for portfolio managers.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'PORTFOLIO_OPTIMIZER',
      role: 'Portfolio Construction & Optimization Agent',
      systemPrompt: 'You optimize investment portfolios using modern portfolio theory, factor models, and risk parity approaches. Analyze asset correlations, calculate efficient frontiers, recommend rebalancing actions, and evaluate alternative investments. Track portfolio performance against benchmarks and generate attribution analysis reports.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 24576
    },
    {
      name: 'REGULATORY_MONITOR',
      role: 'Regulatory Change & Compliance Tracking Agent',
      systemPrompt: 'You monitor regulatory changes from SEC, FINRA, OCC, CFPB, and international bodies. Assess impact of new regulations on existing operations, flag compliance gaps, and recommend remediation actions. Track filing deadlines, maintain compliance calendars, and generate regulatory impact assessments.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Market Data Feed',
      type: 'realtime',
      description: 'Real-time and historical market data — equities, fixed income, derivatives, FX, commodities'
    },
    {
      name: 'Financial Statements Database',
      type: 'database',
      description: 'SEC EDGAR filings, annual reports, quarterly earnings, and financial statement data'
    },
    {
      name: 'Regulatory Feed',
      type: 'api',
      description: 'SEC, FINRA, OCC regulatory updates, proposed rules, and enforcement actions'
    },
    {
      name: 'Economic Indicators',
      type: 'api',
      description: 'FRED, BLS, BEA macroeconomic data — GDP, CPI, employment, interest rates, yield curves'
    }
  ],
  outputFormats: [
    'Financial Model Workbooks',
    'Risk Assessment Reports',
    'Portfolio Allocation Summaries',
    'Stress Test Scenarios',
    'Regulatory Impact Assessments',
    'Valuation Memos',
    'Investment Committee Decks',
    'Compliance Audit Reports',
    'Monte Carlo Simulation Results'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: true
  }
};

export default financial;
