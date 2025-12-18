/*
  # Create Blog Posts and Leads Tables

  ## Overview
  This migration creates tables for managing blog posts and lead form submissions for the Koku Solar website.

  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly version of the title
  - `excerpt` (text) - Short summary of the blog post
  - `content` (text) - Full blog post content
  - `author` (text) - Author name
  - `category` (text) - Post category (e.g., 'tips', 'news', 'guides')
  - `image_url` (text) - URL to the featured image
  - `created_at` (timestamptz) - Timestamp when post was created
  - `updated_at` (timestamptz) - Timestamp when post was last updated

  ### `leads`
  - `id` (uuid, primary key) - Unique identifier for each lead
  - `first_name` (text) - Lead's first name
  - `last_name` (text) - Lead's last name
  - `email` (text) - Lead's email address
  - `phone` (text) - Lead's phone number
  - `address` (text) - Property street address
  - `city` (text) - Property city
  - `state` (text) - Property state
  - `zip_code` (text) - Property ZIP code
  - `property_type` (text) - Type of property (residential, commercial, industrial)
  - `roof_type` (text) - Type of roof
  - `monthly_bill` (numeric) - Average monthly electric bill
  - `installation_type` (text) - Preferred installation type
  - `timeframe` (text) - When they want to install
  - `comments` (text) - Additional comments
  - `created_at` (timestamptz) - Timestamp when lead was submitted

  ## Security
  - Enable RLS on both tables
  - `blog_posts` table: Public read access, no write access (posts managed through admin interface)
  - `leads` table: Insert-only access for anonymous users (form submissions)

  ## Indexes
  - Index on `blog_posts.slug` for fast lookups
  - Index on `blog_posts.category` for filtering
  - Index on `leads.email` for lead management
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Koku Solar Team',
  category text NOT NULL DEFAULT 'general',
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  zip_code text NOT NULL,
  property_type text NOT NULL,
  roof_type text NOT NULL,
  monthly_bill numeric NOT NULL,
  installation_type text NOT NULL,
  timeframe text NOT NULL,
  comments text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Blog posts policies: Allow public read access
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (true);

-- Leads policies: Allow anonymous users to insert leads
CREATE POLICY "Anyone can submit a lead form"
  ON leads
  FOR INSERT
  WITH CHECK (true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, image_url) VALUES
(
  '5 Benefits of Installing Solar Panels in 2024',
  '5-benefits-of-installing-solar-panels-2024',
  'Discover why 2024 is the perfect year to make the switch to solar energy and start saving on your electricity bills.',
  'Solar energy has become more accessible and affordable than ever before. In this comprehensive guide, we explore the top five benefits of installing solar panels in 2024.

1. Significant Cost Savings
With rising electricity prices, solar panels can help you save thousands of dollars over their lifetime. Most homeowners see a return on investment within 5-7 years, and after that, it''s essentially free electricity for decades.

2. Increased Home Value
Studies show that homes with solar panel installations sell for 4-6% more than comparable homes without solar. It''s an investment that pays off whether you stay in your home or decide to sell.

3. Environmental Impact
By switching to solar, you''re reducing your carbon footprint and contributing to a cleaner environment. A typical residential solar system offsets about 3-4 tons of carbon emissions annually.

4. Energy Independence
With solar panels and battery storage, you can reduce or eliminate your dependence on the grid. This provides protection against power outages and gives you control over your energy future.

5. Government Incentives
The federal solar tax credit allows you to deduct 30% of your solar installation costs from your federal taxes. Many states offer additional incentives, making solar more affordable than ever.

Ready to go solar? Contact Koku Solar today for a free consultation and personalized quote.',
  'Sarah Chen',
  'guides',
  'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800'
),
(
  'Understanding Solar Panel Efficiency: What You Need to Know',
  'understanding-solar-panel-efficiency',
  'Learn about solar panel efficiency ratings and how to choose the right panels for maximum energy production.',
  'Solar panel efficiency is one of the most important factors to consider when investing in a solar energy system. But what exactly does it mean, and why does it matter?

What is Solar Panel Efficiency?
Solar panel efficiency refers to the percentage of sunlight that hits the panel and is converted into usable electricity. Modern solar panels typically have efficiency ratings between 15% and 22%, with premium models achieving even higher rates.

Factors Affecting Efficiency
Several factors influence how efficiently your solar panels perform:
- Temperature: Panels actually work more efficiently in cooler temperatures
- Shading: Even partial shading can significantly reduce output
- Installation angle: Proper positioning maximizes sun exposure
- Cleanliness: Dust and debris can reduce efficiency by up to 25%

Monocrystalline vs Polycrystalline
Monocrystalline panels typically offer higher efficiency (18-22%) and better performance in low-light conditions, but come at a premium price. Polycrystalline panels are more affordable with slightly lower efficiency (15-17%), making them a great choice for properties with ample roof space.

Is Higher Efficiency Always Better?
Not necessarily. While high-efficiency panels produce more power per square foot, they also cost more. For properties with plenty of roof space, standard efficiency panels often provide better value. However, if space is limited, investing in high-efficiency panels makes sense.

Maximizing Your System''s Performance
At Koku Solar, we conduct thorough site assessments to determine the optimal panel type, placement, and configuration for your property. Our goal is to maximize your energy production while staying within your budget.

Want to learn more about which solar panels are right for your home? Schedule a free consultation with our experts today.',
  'Michael Roberts',
  'education',
  'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800'
),
(
  'How to Prepare Your Home for Solar Panel Installation',
  'prepare-home-for-solar-installation',
  'A comprehensive checklist to help you get your home ready for a smooth and efficient solar panel installation.',
  'Preparing your home for solar panel installation can help ensure a smooth process and optimal system performance. Here''s everything you need to know to get ready.

Roof Assessment and Repairs
Before installation, have your roof inspected by a professional. If your roof is nearing the end of its lifespan (typically 15-20 years for asphalt shingles), consider replacing it first. It''s much more cost-effective than removing and reinstalling solar panels later.

Clear the Installation Area
Trim any tree branches that might shade your roof or interfere with installation. Remove any satellite dishes, antennas, or other equipment from the installation area. Ensure there''s clear access to your roof and electrical panel.

Electrical Panel Evaluation
Your electrical panel needs to accommodate the solar system. If your panel is outdated or doesn''t have sufficient capacity, you may need an upgrade. This is something we''ll assess during your initial consultation.

HOA and Permit Requirements
If you live in a community with a homeowners association, review their guidelines regarding solar installations. Most states have "solar access laws" that prevent HOAs from prohibiting solar, but it''s good to be informed. We''ll handle all necessary permits and inspections.

Energy Audit
Consider conducting a home energy audit before installation. Addressing inefficiencies like poor insulation or old appliances can help you optimize your system size and maximize savings.

Financial Preparation
Decide on your financing method: cash purchase, solar loan, or lease. Gather necessary documentation for tax credits and incentives. We can help you explore all available options and choose what works best for your situation.

Day of Installation
On installation day, ensure pets are secured and vehicles are moved from the driveway. The installation typically takes 1-3 days, depending on system size and complexity.

Post-Installation
After installation, we''ll set up your monitoring system so you can track your energy production in real-time. We''ll also provide comprehensive training on system operation and maintenance.

Ready to start your solar journey? Contact Koku Solar for a free site assessment and customized installation plan.',
  'Emily Foster',
  'tips',
  'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800'
);
