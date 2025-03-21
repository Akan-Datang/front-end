export interface BlogPost {
    id: string;
    title: string;
    category: string;
    date: string;
    imageUrl: string;
    content: string;
  }
  
  // Helper function to convert title to slug
  export function titleToSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }
  
  // Sample blog posts data with content
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How to Protect Your Business from Emerging Cyber Threats",
      category: "Cybersecurity",
      date: "March 18, 2025",
      imageUrl: "/blog/cb1.png",
      content: `
        <h2>Understanding the Modern Threat Landscape</h2>
        <p>In today's digital world, businesses face an ever-evolving array of cyber threats. From sophisticated ransomware attacks to social engineering schemes, the methods used by malicious actors continue to advance in complexity and scale.</p>
        
        <p>According to recent studies, over 60% of small to medium-sized businesses that suffer a significant cyber attack go out of business within six months. This stark reality underscores the critical importance of implementing robust cybersecurity measures.</p>
        
        <h2>Essential Security Measures for Every Business</h2>
        <p>Regardless of your company's size, there are several fundamental security practices that should be implemented:</p>
        
        <ul>
          <li><strong>Multi-Factor Authentication (MFA)</strong>: Implement MFA across all business applications and services to add an additional layer of security beyond passwords.</li>
          <li><strong>Regular Software Updates</strong>: Ensure all systems and software are regularly updated to patch known vulnerabilities.</li>
          <li><strong>Employee Training</strong>: Conduct regular cybersecurity awareness training for all staff members.</li>
          <li><strong>Data Backup Strategy</strong>: Maintain regular, secure backups of all critical business data.</li>
          <li><strong>Incident Response Plan</strong>: Develop and regularly test a comprehensive incident response plan.</li>
        </ul>
        
        <h2>Advanced Protection Strategies</h2>
        <p>For businesses requiring enhanced security postures, consider implementing:</p>
        
        <ul>
          <li><strong>Zero Trust Architecture</strong>: Adopt a security model that requires verification for everyone attempting to access resources, regardless of their location.</li>
          <li><strong>Endpoint Detection and Response (EDR)</strong>: Deploy advanced tools that continuously monitor endpoints for suspicious activities.</li>
          <li><strong>Security Information and Event Management (SIEM)</strong>: Implement systems that provide real-time analysis of security alerts.</li>
        </ul>
        
        <h2>The Future of Cybersecurity</h2>
        <p>As threats continue to evolve, so too must your security strategies. Artificial intelligence and machine learning are increasingly being integrated into cybersecurity solutions, offering enhanced threat detection capabilities and automated responses.</p>
        
        <p>By staying informed about emerging threats and continuously updating your security measures, you can significantly reduce your business's vulnerability to cyber attacks.</p>
      `,
    },
    {
      id: "2",
      title: "How to Protect Your Business from Emerging Cyber Threats",
      category: "Cybersecurity",
      date: "March 18, 2025",
      imageUrl: "/blog/cb2.png",
      content: `
        <h2>Understanding the Modern Threat Landscape</h2>
        <p>In today's digital world, businesses face an ever-evolving array of cyber threats. From sophisticated ransomware attacks to social engineering schemes, the methods used by malicious actors continue to advance in complexity and scale.</p>
        
        <p>According to recent studies, over 60% of small to medium-sized businesses that suffer a significant cyber attack go out of business within six months. This stark reality underscores the critical importance of implementing robust cybersecurity measures.</p>
        
        <h2>Essential Security Measures for Every Business</h2>
        <p>Regardless of your company's size, there are several fundamental security practices that should be implemented:</p>
        
        <ul>
          <li><strong>Multi-Factor Authentication (MFA)</strong>: Implement MFA across all business applications and services to add an additional layer of security beyond passwords.</li>
          <li><strong>Regular Software Updates</strong>: Ensure all systems and software are regularly updated to patch known vulnerabilities.</li>
          <li><strong>Employee Training</strong>: Conduct regular cybersecurity awareness training for all staff members.</li>
          <li><strong>Data Backup Strategy</strong>: Maintain regular, secure backups of all critical business data.</li>
          <li><strong>Incident Response Plan</strong>: Develop and regularly test a comprehensive incident response plan.</li>
        </ul>
        
        <h2>Advanced Protection Strategies</h2>
        <p>For businesses requiring enhanced security postures, consider implementing:</p>
        
        <ul>
          <li><strong>Zero Trust Architecture</strong>: Adopt a security model that requires verification for everyone attempting to access resources, regardless of their location.</li>
          <li><strong>Endpoint Detection and Response (EDR)</strong>: Deploy advanced tools that continuously monitor endpoints for suspicious activities.</li>
          <li><strong>Security Information and Event Management (SIEM)</strong>: Implement systems that provide real-time analysis of security alerts.</li>
        </ul>
        
        <h2>The Future of Cybersecurity</h2>
        <p>As threats continue to evolve, so too must your security strategies. Artificial intelligence and machine learning are increasingly being integrated into cybersecurity solutions, offering enhanced threat detection capabilities and automated responses.</p>
        
        <p>By staying informed about emerging threats and continuously updating your security measures, you can significantly reduce your business's vulnerability to cyber attacks.</p>
      `,
    },
    {
      id: "3",
      title: "How to Protect Your Business from Emerging Cyber Threats",
      category: "Cybersecurity",
      date: "March 18, 2025",
      imageUrl: "/blog/cb3.png",
      content: `
        <h2>Understanding the Modern Threat Landscape</h2>
        <p>In today's digital world, businesses face an ever-evolving array of cyber threats. From sophisticated ransomware attacks to social engineering schemes, the methods used by malicious actors continue to advance in complexity and scale.</p>
        
        <p>According to recent studies, over 60% of small to medium-sized businesses that suffer a significant cyber attack go out of business within six months. This stark reality underscores the critical importance of implementing robust cybersecurity measures.</p>
        
        <h2>Essential Security Measures for Every Business</h2>
        <p>Regardless of your company's size, there are several fundamental security practices that should be implemented:</p>
        
        <ul>
          <li><strong>Multi-Factor Authentication (MFA)</strong>: Implement MFA across all business applications and services to add an additional layer of security beyond passwords.</li>
          <li><strong>Regular Software Updates</strong>: Ensure all systems and software are regularly updated to patch known vulnerabilities.</li>
          <li><strong>Employee Training</strong>: Conduct regular cybersecurity awareness training for all staff members.</li>
          <li><strong>Data Backup Strategy</strong>: Maintain regular, secure backups of all critical business data.</li>
          <li><strong>Incident Response Plan</strong>: Develop and regularly test a comprehensive incident response plan.</li>
        </ul>
        
        <h2>Advanced Protection Strategies</h2>
        <p>For businesses requiring enhanced security postures, consider implementing:</p>
        
        <ul>
          <li><strong>Zero Trust Architecture</strong>: Adopt a security model that requires verification for everyone attempting to access resources, regardless of their location.</li>
          <li><strong>Endpoint Detection and Response (EDR)</strong>: Deploy advanced tools that continuously monitor endpoints for suspicious activities.</li>
          <li><strong>Security Information and Event Management (SIEM)</strong>: Implement systems that provide real-time analysis of security alerts.</li>
        </ul>
        
        <h2>The Future of Cybersecurity</h2>
        <p>As threats continue to evolve, so too must your security strategies. Artificial intelligence and machine learning are increasingly being integrated into cybersecurity solutions, offering enhanced threat detection capabilities and automated responses.</p>
        
        <p>By staying informed about emerging threats and continuously updating your security measures, you can significantly reduce your business's vulnerability to cyber attacks.</p>
      `,
    },
    // Additional posts with different categories
    {
      id: "4",
      title: "10 Web Development Trends to Watch in 2025",
      category: "Web Development",
      date: "March 15, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      content: `
        <h2>The Evolving Landscape of Web Development</h2>
        <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. As we move through 2025, several key trends are shaping the future of how we build and interact with web applications.</p>
        
        <h2>1. WebAssembly Goes Mainstream</h2>
        <p>WebAssembly (Wasm) is finally seeing widespread adoption, allowing developers to run high-performance code written in languages like Rust, C++, and Go directly in the browser. This technology is enabling more complex applications to run efficiently on the web.</p>
        
        <h2>2. Edge Computing for Web Applications</h2>
        <p>The shift toward edge computing continues to accelerate, with more web applications running code closer to users for improved performance and reduced latency. Frameworks and platforms that support edge functions are becoming standard in modern web development stacks.</p>
        
        <h2>3. AI-Assisted Development</h2>
        <p>Artificial intelligence tools are revolutionizing how developers write and debug code. From intelligent code completion to automated testing and optimization, AI assistants are becoming indispensable tools in the developer's toolkit.</p>
        
        <h2>4. Micro-Frontends Architecture</h2>
        <p>Large applications are increasingly being built using micro-frontends, allowing teams to work independently on different parts of an application while maintaining a cohesive user experience. This approach brings the benefits of microservices to the frontend world.</p>
        
        <h2>5. Serverless Continues to Grow</h2>
        <p>Serverless architectures are becoming the default choice for many new web applications, offering improved scalability and reduced operational complexity. The ecosystem of tools and services supporting serverless development continues to mature.</p>
        
        <h2>6. Web Components and Shadow DOM</h2>
        <p>Native web components are seeing increased adoption as browsers improve their support for this technology. The ability to create encapsulated, reusable components without framework dependencies is proving valuable for long-lived applications.</p>
        
        <h2>7. Real-Time Everything</h2>
        <p>Users now expect real-time updates and interactions in web applications. Technologies like WebSockets, Server-Sent Events, and WebRTC are becoming standard components in modern web development.</p>
        
        <h2>8. Improved Accessibility Focus</h2>
        <p>Accessibility is no longer an afterthought but a core consideration in web development. Tools and frameworks are increasingly incorporating accessibility features by default, making it easier to build inclusive web experiences.</p>
        
        <h2>9. Progressive Web Apps 2.0</h2>
        <p>PWAs continue to evolve with new capabilities that blur the line between web and native applications. Improved offline support, better integration with device features, and enhanced installation experiences are making PWAs more powerful than ever.</p>
        
        <h2>10. Sustainability in Web Development</h2>
        <p>Energy-efficient code and environmentally conscious design practices are gaining attention as the tech industry focuses more on sustainability. Tools to measure and optimize the carbon footprint of web applications are becoming part of the development process.</p>
      `,
    },
    {
      id: "5",
      title: "Building Responsive Websites with Tailwind CSS",
      category: "Web Development",
      date: "March 12, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      content: `
        <h2>The Power of Utility-First CSS</h2>
        <p>Tailwind CSS has revolutionized how developers approach styling web applications. Its utility-first methodology provides a different paradigm compared to traditional CSS frameworks, offering greater flexibility and customization while maintaining rapid development speed.</p>
        
        <h2>Getting Started with Tailwind</h2>
        <p>Setting up Tailwind CSS in your project has become increasingly straightforward. With modern build tools like Vite or Next.js, integration is often just a matter of installing the package and adding a few configuration files.</p>
        
        <pre><code>npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p</code></pre>
        
        <h2>Responsive Design Fundamentals</h2>
        <p>Tailwind makes responsive design intuitive through its breakpoint prefixes. Instead of writing media queries, you can simply prefix utility classes with screen size indicators:</p>
        
        <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
    Responsive content
  &lt;/div&gt;</code></pre>
        
        <p>This approach allows you to think about your layout at different screen sizes directly in your HTML, making the responsive behavior immediately visible in your code.</p>
        
        <h2>Creating Custom Components</h2>
        <p>While Tailwind is utility-first, that doesn't mean you should repeat the same combinations of utilities throughout your codebase. Using Tailwind with component-based frameworks or template systems allows you to create reusable components:</p>
        
        <pre><code>// Button component example
  function Button({ children, variant = 'primary' }) {
    const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none";
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800"
    };
    
    return (
      &lt;button className={\`\${baseClasses} \${variants[variant]}\`}&gt;
        {children}
      &lt;/button&gt;
    );
  }</code></pre>
        
        <h2>Advanced Responsive Techniques</h2>
        
        <h3>Container Queries</h3>
        <p>While viewport-based responsive design has been the standard for years, container queries are changing how we think about responsive components. Tailwind now offers support for container queries, allowing components to adapt based on their parent container's size rather than just the viewport.</p>
        
        <h3>Responsive Typography</h3>
        <p>Creating a fluid typography system that scales smoothly across different screen sizes is essential for professional-looking websites. Tailwind's typography plugin provides a solid foundation, which can be extended with custom utilities for truly fluid text scaling.</p>
        
        <h2>Performance Optimization</h2>
        <p>One of Tailwind's strengths is its excellent tree-shaking capabilities. When properly configured with PurgeCSS, your production CSS will only include the utilities you've actually used, resulting in remarkably small file sizes despite the comprehensive nature of the framework.</p>
        
        <h2>Dark Mode and Theming</h2>
        <p>Implementing dark mode has become a standard requirement for modern websites. Tailwind's dark mode support makes this straightforward:</p>
        
        <pre><code>&lt;div class="bg-white text-black dark:bg-gray-800 dark:text-white"&gt;
    Content that adapts to light/dark mode
  &lt;/div&gt;</code></pre>
        
        <p>For more complex theming requirements, Tailwind's configuration system allows you to define custom theme variables and create sophisticated design systems.</p>
      `,
    },
    {
      id: "6",
      title: "The Future of AI in Business Applications",
      category: "Artificial Intelligence",
      date: "March 10, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      content: `
        <h2>AI's Transformative Impact on Business</h2>
        <p>Artificial Intelligence is no longer just a buzzword or a technology of the future—it's actively reshaping how businesses operate today. From automating routine tasks to providing deep insights from complex data, AI technologies are creating new possibilities across virtually every industry.</p>
        
        <h2>Current AI Applications in Business</h2>
        
        <h3>Customer Experience Enhancement</h3>
        <p>AI-powered chatbots and virtual assistants have evolved beyond simple rule-based systems to become sophisticated conversation partners capable of resolving complex customer inquiries. These systems are now handling up to 70% of customer service interactions in some organizations, freeing human agents to focus on more complex issues.</p>
        
        <h3>Predictive Analytics</h3>
        <p>Businesses are leveraging machine learning models to forecast everything from inventory needs to customer churn. These predictive capabilities allow companies to be proactive rather than reactive, addressing potential issues before they become problems.</p>
        
        <h3>Process Automation</h3>
        <p>Robotic Process Automation (RPA) enhanced with AI capabilities is streamlining operations across finance, HR, and supply chain departments. These intelligent automation systems can now handle exceptions and make decisions that previously required human judgment.</p>
        
        <h2>Emerging Trends in Business AI</h2>
        
        <h3>Generative AI for Content and Product Creation</h3>
        <p>Generative AI tools are revolutionizing content creation, product design, and even software development. These systems can produce high-quality text, images, code, and design concepts at unprecedented speed, dramatically accelerating innovation cycles.</p>
        
        <h3>Decision Intelligence</h3>
        <p>AI systems are increasingly being used to augment human decision-making in complex scenarios. By analyzing vast amounts of data and modeling potential outcomes, these systems help executives make more informed strategic decisions.</p>
        
        <h3>AI-Powered Knowledge Management</h3>
        <p>Organizations are implementing AI systems that can extract, organize, and surface institutional knowledge from unstructured data sources like emails, documents, and meeting recordings. This capability is proving particularly valuable in knowledge-intensive industries and for preserving expertise as employees transition.</p>
        
        <h2>Implementation Challenges</h2>
        
        <h3>Data Quality and Governance</h3>
        <p>The effectiveness of AI systems depends heavily on the quality of data they're trained on. Establishing robust data governance frameworks and ensuring high-quality, unbiased training data remains a significant challenge for many organizations.</p>
        
        <h3>Integration with Legacy Systems</h3>
        <p>Many businesses struggle to integrate AI capabilities with existing technology infrastructure. Successful implementation often requires modernizing core systems or creating effective middleware solutions.</p>
        
        <h3>Ethical Considerations</h3>
        <p>As AI systems take on more decision-making responsibilities, ensuring these decisions are fair, transparent, and aligned with organizational values becomes increasingly important. Leading organizations are establishing AI ethics committees and governance frameworks to address these concerns.</p>
        
        <h2>The Road Ahead</h2>
        <p>The next frontier for business AI involves systems that can reason across domains, explain their decision-making processes, and collaborate more naturally with human teams. As these capabilities mature, we can expect AI to transition from a tool that primarily drives efficiency to one that enables entirely new business models and sources of value creation.</p>
        
        <p>Organizations that view AI not just as a technology implementation but as a strategic capability will be best positioned to capture the transformative potential of these rapidly evolving technologies.</p>
      `,
    },
  ]
  
  // Function to get all blog posts
export function getAllBlogPosts(sortBy: "date" | "title" = "date"): BlogPost[] {
    return [...blogPosts].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }
  
  // Function to get blog posts by category
  export function getBlogPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter((post) => post.category === category);
  }
  
  // Function to get all unique categories
  export function getAllCategories(): string[] {
    const categories = new Set(blogPosts.map((post) => post.category));
    return Array.from(categories);
  }
  
  // Function to group blog posts by category
  export function getBlogPostsGroupedByCategory(): Record<string, BlogPost[]> {
    return blogPosts.reduce((acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);
      return acc;
    }, {} as Record<string, BlogPost[]>);
  }
  
  // Function to get a blog post by its title slug
  export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => titleToSlug(post.title) === slug);
  }
  
  // Function to get a blog post by ID
  export function getBlogPostById(id: string): BlogPost | undefined {
    return blogPosts.find((post) => post.id === id);
  }
  
  // Function to search blog posts
  export function searchBlogPosts(query: string): BlogPost[] {
    const lowerCaseQuery = query.toLowerCase();
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.content.toLowerCase().includes(lowerCaseQuery)
    );
  }
  
  // Function to get related posts
  export function getRelatedPosts(postId: string, limit: number = 3): BlogPost[] {
    const post = getBlogPostById(postId);
    if (!post) return [];
  
    return blogPosts
      .filter((p) => p.id !== postId && p.category === post.category)
      .slice(0, limit);
  }
  
  // Function to get recent posts
  export function getRecentPosts(limit: number = 5): BlogPost[] {
    return getAllBlogPosts()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }