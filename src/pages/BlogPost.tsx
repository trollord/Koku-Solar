import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Clock, FileText } from 'lucide-react';

interface BlogPostData {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const renderContent = (markdown: string): string => {
  const inline = (text: string): string =>
    text
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" style="color:#FF8C00;font-weight:600;text-decoration:none;">$1</a>'
      )
      .replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight:700;color:#2D2D2D;">$1</strong>');

  const lines = markdown.split('\n');
  let html = '';
  let listType: 'ul' | 'ol' | null = null;
  let inPre = false;

  const closeList = () => {
    if (listType) {
      html += `</${listType}>`;
      listType = null;
    }
  };

  for (const raw of lines) {
    if (inPre) {
      html += '\n' + raw;
      if (raw.includes('</pre>')) inPre = false;
      continue;
    }

    const line = raw.trim();

    if (line.startsWith('<pre')) {
      closeList();
      html += line;
      if (!line.includes('</pre>')) inPre = true;
      continue;
    }
    if (line.startsWith('<')) {
      closeList();
      html += line;
      continue;
    }
    if (line === '') {
      closeList();
      continue;
    }
    if (line === '---') {
      closeList();
      html += '<hr style="border:none;border-top:1px solid #e5e7eb;margin:2rem 0;" />';
      continue;
    }
    if (line.startsWith('### ')) {
      closeList();
      html += `<h3 style="font-size:1.35rem;font-weight:700;color:#2D2D2D;margin:1.75rem 0 0.75rem;line-height:1.3;">${inline(line.slice(4))}</h3>`;
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
      html += `<h2 style="font-size:1.75rem;font-weight:700;color:#2D2D2D;margin:2.25rem 0 1rem;line-height:1.3;">${inline(line.slice(3))}</h2>`;
      continue;
    }
    if (line.startsWith('# ')) {
      closeList();
      html += `<h1 style="font-size:2.25rem;font-weight:800;color:#2D2D2D;margin:1.5rem 0 1.25rem;line-height:1.25;">${inline(line.slice(2))}</h1>`;
      continue;
    }

    const ol = line.match(/^\d+\.\s+(.*)$/);
    if (ol) {
      if (listType !== 'ol') {
        closeList();
        html += '<ol style="margin:1rem 0;padding-left:1.5rem;list-style:decimal;">';
        listType = 'ol';
      }
      html += `<li style="margin-bottom:0.5rem;">${inline(ol[1])}</li>`;
      continue;
    }
    const ul = line.match(/^[-*]\s+(.*)$/);
    if (ul) {
      if (listType !== 'ul') {
        closeList();
        html += '<ul style="margin:1rem 0;padding-left:1.5rem;list-style:disc;">';
        listType = 'ul';
      }
      html += `<li style="margin-bottom:0.5rem;">${inline(ul[1])}</li>`;
      continue;
    }

    closeList();
    html += `<p style="margin:0 0 1.25rem;">${inline(line)}</p>`;
  }

  closeList();
  return html;
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  const blogPosts: { [key: string]: BlogPostData } = {
    'pm-surya-ghar-yojana-society-subsidy': {
      id: 6,
      title: "The Clock is Ticking: Why Missing Out on the PM Surya Ghar Yojana Costs Your Society",
      slug: "pm-surya-ghar-yojana-society-subsidy",
      excerpt: "The PM Surya Ghar Yojana ends on 31st March 2027 and offers ₹18,000 per kW (30% of cost) for housing societies. Here's the full roadmap and why waiting costs lakhs.",
      category: "Regulations",
      author: "Koku Solar Team",
      date: "July 9, 2026",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
# Introduction

The PM Surya Ghar Yojana officially ends on **31st March, 2027**, and for a large number of residential societies and Resident Welfare Associations (RWAs), it provides a subsidy of **₹18,000 per kW** — which comes up to **30% of the total cost** of a solar rooftop installation.

If you think that March 2027 is far away, here's why waiting to apply will cost your society lakhs in government subsidy.

## This Is How the Roadmap Looks Like

<img src="/pm-surya-ghar-roadmap.webp" alt="PM Surya Ghar Yojana subsidy roadmap flowchart" style="max-width:100%;height:auto;margin:1.5rem auto;display:block;border-radius:12px;" />

1. **Registration:** The society registers its profile on the national portal.
2. **Application:** Submitting the official request for solar project clearance.
3. **Feasibility:** The state utility board (like MSEDCL) reviews your local grid and transformer capacity to approve the plant size. Koku Solar handles your engineering layout design using mandatory DCR Panels and ALMM Approved Panels to guarantee passing this stage.
4. **Vendor Selection:** The society formally selects a vendor empaneled under the PM Surya Ghar Yojana on the portal. This is where the society passes its internal managing committee consent and mandatory SGM general body votes.
5. **Upload Agreement:** Your empaneled vendor uploads the signed project execution agreement.
6. **Installation:** Procurement, structural mounting, and physical deployment of the rooftop solar system.
7. **Inspection:** Engineers visit your society to inspect the electrical work, safety parameters, and net-metering readiness.
8. **Project Commissioning:** The utility board officially adds your system to the power grid.
9. **Subsidy Request:** The society submits its formal claim documentation for the cash payout.
10. **Subsidy Disbursal:** The central government releases the final funds directly to the society.

## Why Waiting Is a Gamble

Now that you see the full timeline, it becomes obvious why waiting until late 2026 or early 2027 to start is a gamble. Approval and installation require weeks of preparation, and external regulatory approval can stall your project by a huge margin.

Every month spent deliberating is a month where you throw away thousands of rupees on electricity bills for common area meters (lifts, water pumps, and lights). This is unrecoverable money that could have been saved from day one.

And as the 2027 deadline nears, buildings will suddenly rush to buy solar assets, and waiting means your society could face longer installation queues, supply shortages, higher component prices, and rushed work from overwhelmed contractors.

## Prerequisites to Be Eligible for the Subsidy

Approval and installation require preparation, and external regulatory steps can stall your project by a huge margin if your documentation is incorrect. The government enforces strict criteria for meters:

- **Meter Name Change:** All common meters must be officially registered in the building society's name, not under the builder or an individual.
- **Separate Bank Accounts:** If your building uses different common meters (e.g., separate meters for individual wings, water pumps, or lighting), each common meter needs a different bank account linked to it in order to process the subsidy.

## Secure Your Spot Now

To guarantee your subsidy allocation, your system does not need to be completely built by tomorrow, but your application must be registered in the official government pipeline by a vendor empaneled under the PM Surya Ghar Yojana.

---

**Contact Koku Solar today to receive your feasibility check and lock in your society's funding!**

[Request a Solar Assessment](/contact) | [Get Detailed Quote](/quote)
      `
    },
    'rooftop-solar-structure-terrace-slab-weight': {
      id: 7,
      title: "Are You Adding Unnecessary Weight to Your Terrace Slab When You Install a Rooftop Solar Plant?",
      slug: "rooftop-solar-structure-terrace-slab-weight",
      excerpt: "Why heavy steel I-beam mounting structures are a red flag for housing societies — and how factory-galvanised, weld-free designs protect your terrace slab for 25 years.",
      category: "CHSL",
      author: "Koku Solar Team",
      date: "July 9, 2026",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `
# Introduction

When a housing society evaluates proposals for a rooftop solar panel installation, a common sales tactic among installers is to equate weight with strength. One might encounter quotes which include the use of heavy steel **I-Beams**.

And to a committee board, it does sound durable — but here is why it is a massive red flag.

## Adding Dead Weight to the Terrace Slab for the Next 25 Years

Every concrete slab is designed to withstand a certain amount of weight.

When an installer introduces steel I-Beams under the guise of extra strength, they have a tremendous effect on the structure of your building. The extra weight strains the slab over a long period of time.

## Can the Structure Stay Rust-Free for 25 Years?

Installers usually weld heavy mild steel frames together directly on top of your roof. On-site welding destroys protective coatings, burning them away at the joint connections and creating immediate rust points that weaken the framework during every monsoon, especially in humid areas.

A far better way is to use **factory-fabricated, hot-dip galvanised (HDG)** steel structures. This industrial process completely coats the steel in a thick zinc layer compliant with strict **IS 2629**, **IS 2633**, and **IS 4759** engineering standards.

The entire system arrives at your building ready for a completely weld-free nut-and-bolt assembly. Because a welding torch never touches the steel on your roof, the protective rust barrier remains 100% intact from day one.

To ensure a true 25-year lifespan, every single connection point must eliminate parts that can corrode. Using premium, highly corrosion-resistant nuts, bolts, and clamps ensures that your structural fasteners stay as clean and secure as the main galvanised framework.

## The Missing Link: Demanding Engineering Proof

Do not take an installer's word that a heavy structure is safe. To protect your housing society, you must insist on seeing a **STAAD.Pro** report and a formal structural stability certification issued by a licensed structural engineer.

This software analysis verifies that an optimised, lighter structure is engineered correctly to withstand maximum local wind loads without adding dangerous, uncertified dead weight to your roof slab.

## The Bottom Line

Do not buy into the myth of the heavy structure. Protect your society by demanding an optimised steel design that:

- Prevents roof slab strain
- Complies with official IS standards
- Uses a factory-fabricated weld-free assembly
- Carries a certified stability report

## Partner with Koku Solar

Protect the structural integrity of your building with engineering that puts safety first.

---

**Contact Koku Solar today to schedule a complimentary solar assessment!**

[Request a Solar Assessment](/contact) | [Get Detailed Quote](/quote)
      `
    },
  };

  useEffect(() => {
    if (slug && blogPosts[slug]) {
      setPost(blogPosts[slug]);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-koku-orange"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Article not found</h2>
          <Link to="/blog" className="text-koku-orange hover:underline">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-16">
      <article>
        <div className="relative h-96 bg-gradient-to-br from-koku-dark to-gray-800">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block bg-koku-orange text-koku-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/blog"
              className="flex items-center space-x-2 text-koku-orange hover:text-koku-dark font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Resources</span>
            </Link>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-koku-orange transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 font-medium">{post.excerpt}</p>
            <div
              className="text-gray-700 leading-relaxed"
              style={{
                lineHeight: '1.8',
                fontSize: '18px'
              }}
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-koku-orange mr-3" />
                <h3 className="text-2xl font-bold text-koku-dark">Need Expert Guidance?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Get personalized advice for your solar project from our experienced engineering team. We provide detailed feasibility analysis and customized solutions for CHSL, commercial, and industrial installations across Maharashtra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact#contact"
                  className="inline-block bg-koku-orange text-koku-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all shadow-lg text-center"
                >
                  Request Solar Assessment
                </Link>
                <Link
                  to="/contact#contact"
                  className="inline-block bg-koku-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}