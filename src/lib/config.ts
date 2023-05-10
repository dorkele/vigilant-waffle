import config from "../../config.json";
import { CustomerQuoteLocation } from "./customer_quotes";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: Array<{ keyword: string }>;
  readonly homepage_banner: {
    banner_text: string;
    link_text: string;
    link_url: string;
  };
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
  readonly team_order: string[];
  readonly [CustomerQuoteLocation.Homepage]: string[];
  readonly [CustomerQuoteLocation.PricingPage]: string[];
  readonly [CustomerQuoteLocation.CustomersPage]: string[];
  readonly [CustomerQuoteLocation.RequestDemoPage]: string;
  readonly [CustomerQuoteLocation.HomepageATSTab]: string;
  readonly [CustomerQuoteLocation.HomepageSchedulingTab]: string;
  readonly [CustomerQuoteLocation.HomepageCRMTab]: string;
  readonly [CustomerQuoteLocation.HomePageAnalyticsTab]: string;
  readonly [CustomerQuoteLocation.GrowthPageCustomerSuccess]: string;
};

// eslint-disable-next-line
export default config as Config;
