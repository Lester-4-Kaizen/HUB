// ============================
// STUDY HUB — SHARED DATA
// ============================
const subjects = [
  { id: "ai",
          url: "topic-ai.html", icon: "🤖", name: "Artificial Intelligence", desc: "Explore AI concepts from basics to machine learning, neural networks, and beyond.", available: true, topics: 13, color: "#1a472a", url: "ai.html" },
  { id: "automata",
          url: "topic-automata.html", icon: "⚙️", name: "Automata Theory and Formal Language", desc: "Finite automata, regular expressions, context-free grammars, Turing machines.", available: false, topics: 0, url: "automata.html" },
  { id: "research",
          url: "topic-research.html", icon: "🔬", name: "Methods of Research in Computing", desc: "Research methodologies, literature reviews, data analysis, and academic writing.", available: false, topics: 0, url: "research.html" },
  { id: "modeling",
          url: "topic-modeling.html", icon: "📐", name: "Modeling and Simulation", desc: "System modeling, simulation techniques, discrete-event and continuous models.", available: false, topics: 0, url: "modeling.html" },
  { id: "se2",
          url: "topic-se2.html", icon: "🛠️", name: "Software Engineering 2", desc: "Advanced software design, architecture patterns, testing, and project management.", available: false, topics: 0, url: "se2.html" },
  { id: "elec3",
          url: "topic-elec3.html", icon: "💡", name: "CS Professional Elective 3", desc: "Specialized elective topics. Content will be added once available.", available: false, topics: 0, url: "elec3.html" },
  { id: "elec4",
          url: "topic-elec4.html", icon: "💡", name: "CS Professional Elective 4", desc: "Specialized elective topics. Content will be added once available.", available: false, topics: 0, url: "elec4.html" },
];

      const topics = [
        {
          id: "what-is-ai",
          url: "topic-what-is-ai.html",
          icon: "🤖",
          name: "What is Artificial Intelligence?",
          shortName: "What is AI?",
          source:
            "https://www.geeksforgeeks.org/artificial-intelligence/what-is-artificial-intelligence-ai/",
          summary:
            "AI refers to the simulation of human intelligence in machines — enabling them to learn, reason, problem-solve, perceive, and understand language. From its 1956 inception at Dartmouth to today's AI boom, it underpins modern technology across every industry.",
          sections: [
            {
              icon: "🧩",
              title: "Definition & Core Concept",
              body: `Artificial Intelligence (AI) is a branch of computer science that creates systems capable of performing tasks requiring human intelligence — such as visual perception, speech recognition, decision-making, and language translation. AI is not a single system; rather, it is a methodology <em>implemented into</em> systems. The formal foundation of AI as an academic field was laid in <strong>1956</strong> at a Dartmouth College conference, where the term was coined by <strong>John McCarthy</strong>.`,
            },
            {
              icon: "📅",
              title: "Historical Milestones",
              body: `Key AI milestones: <strong>1950</strong> — Alan Turing proposes the Turing Test. <strong>1956</strong> — Dartmouth Conference; AI named as a field. <strong>1997</strong> — IBM Deep Blue defeats world chess champion Garry Kasparov. <strong>2011</strong> — IBM Watson wins Jeopardy!. <strong>2012</strong> — Deep learning breakthrough (AlexNet ImageNet). <strong>2016</strong> — AlphaGo defeats Go world champion. <strong>2022</strong> — ChatGPT launches, triggering the modern AI era.`,
              concepts: [
                {
                  term: "Turing Test",
                  def: "Proposed by Alan Turing — a test where a machine must converse indistinguishably from a human to be considered intelligent.",
                },
                {
                  term: "John McCarthy",
                  def: 'Coined the term "Artificial Intelligence" at the 1956 Dartmouth Conference — the formal founding of AI as a field.',
                },
                {
                  term: "Machine Learning",
                  def: "A subset of AI where systems learn from data without being explicitly programmed.",
                },
                {
                  term: "Deep Learning",
                  def: "A subset of ML using neural networks with many layers to learn hierarchical representations from data.",
                },
              ],
            },
            {
              icon: "🏗️",
              title: "Four Core Capabilities of AI",
              body: `AI systems demonstrate four key abilities: <strong>1. Learning</strong> — improving from data (machine learning). <strong>2. Reasoning</strong> — drawing logical conclusions. <strong>3. Problem-Solving</strong> — finding solutions to complex challenges. <strong>4. Perception</strong> — interpreting inputs (images, voice, text). Modern AI systems like LLMs demonstrate all four but remain specialized — not general intelligence.`,
            },
            {
              icon: "🌍",
              title: "Applications Across Industries",
              body: `AI is now universal: <strong>Healthcare</strong> — diagnostic imaging (FDA-approved AI reads X-rays). <strong>Finance</strong> — algorithmic trading, fraud detection. <strong>Transportation</strong> — autonomous vehicles (Tesla Autopilot). <strong>Retail</strong> — recommendation engines (Amazon, Netflix). <strong>Manufacturing</strong> — predictive maintenance. <strong>Education</strong> — personalized learning. <strong>Law</strong> — contract analysis, legal research.`,
            },
          ],
          subtopics: [
            {
              icon: "🧠",
              name: "Narrow AI vs. General AI vs. Super AI",
              badge: "AI Types",
              content: `<strong>Narrow AI (ANI):</strong> All current AI — designed for one specific task. Voice assistants, chess engines, spam filters. <strong>General AI (AGI):</strong> Hypothetical human-level AI — does not yet exist. The stated goal of OpenAI, DeepMind. <strong>Super AI (ASI):</strong> Hypothetical AI surpassing all human intelligence. The subject of both optimistic and existential concern.<div class="highlight-box">💡 Every AI system you interact with today — including ChatGPT — is Narrow AI. AGI remains an unsolved research goal.</div>`,
            },
            {
              icon: "📊",
              name: "Machine Learning vs. Deep Learning vs. AI",
              badge: "Hierarchy",
              content: `<strong>AI</strong> is the broadest concept — any technique enabling machines to mimic human intelligence. <strong>Machine Learning</strong> is a subset of AI — machines that learn from data without explicit programming. <strong>Deep Learning</strong> is a subset of ML — uses multi-layer neural networks. Think of them as nested rings: AI ⊃ ML ⊃ Deep Learning. Most state-of-the-art AI today (GPT-4, DALL·E) is deep learning.`,
            },
          ],
          flashcards: [
            {
              q: "When and where was Artificial Intelligence formally founded as a field?",
              a: '1956 at the Dartmouth College Conference — John McCarthy coined the term "Artificial Intelligence" and organized the founding meeting.',
            },
            {
              q: "What are the four core capabilities of AI?",
              a: "Learning (from data), Reasoning (logical conclusions), Problem-Solving (finding solutions), and Perception (interpreting images, voice, text).",
            },
            {
              q: "What is the relationship between AI, Machine Learning, and Deep Learning?",
              a: "AI is the broadest concept. ML is a subset of AI (learns from data). Deep Learning is a subset of ML (uses multi-layer neural networks). AI ⊃ ML ⊃ Deep Learning.",
            },
            {
              q: "Name 3 industries where AI has major applications.",
              a: "Healthcare (medical imaging), Finance (fraud detection, trading), Transportation (autonomous vehicles). Also: Retail, Manufacturing, Education.",
            },
            {
              q: "What did Alan Turing propose in 1950 regarding AI?",
              a: "The Turing Test — a test where a machine must converse indistinguishably from a human to be considered intelligent.",
            },
          ],
          questions: [
            {
              q: 'The term "Artificial Intelligence" was coined at:',
              options: [
                "MIT in 1969",
                "The Dartmouth Conference in 1956",
                "Bell Labs in 1948",
                "Stanford in 1970",
              ],
              answer: 1,
              explain:
                'The term "Artificial Intelligence" was coined by John McCarthy at the 1956 Dartmouth College Conference, which formally established AI as an academic field.',
            },
            {
              q: "Which of the following correctly describes the relationship between AI, ML, and Deep Learning?",
              options: [
                "They are three completely separate fields",
                "ML ⊃ AI ⊃ Deep Learning",
                "AI ⊃ ML ⊃ Deep Learning",
                "Deep Learning ⊃ AI ⊃ ML",
              ],
              answer: 2,
              explain:
                "AI is the broadest concept. Machine Learning is a subset of AI. Deep Learning is a subset of ML — they form nested rings with AI at the outermost layer.",
            },
            {
              q: "What are the four core capabilities demonstrated by AI systems?",
              options: [
                "Speed, Storage, Networking, and Display",
                "Learning, Reasoning, Problem-Solving, and Perception",
                "Coding, Testing, Deploying, and Monitoring",
                "Reading, Writing, Arithmetic, and Art",
              ],
              answer: 1,
              explain:
                "AI systems demonstrate four key capabilities: Learning (improving from data), Reasoning (logical conclusions), Problem-Solving, and Perception (interpreting inputs like images and voice).",
            },
            {
              q: "IBM Deep Blue defeating Garry Kasparov in 1997 was significant because:",
              options: [
                "It was the first computer",
                "It demonstrated AI surpassing a world champion in a complex strategic game",
                "It invented the internet",
                "It was the first smartphone",
              ],
              answer: 1,
              explain:
                "IBM Deep Blue's victory over world chess champion Garry Kasparov in 1997 was a landmark AI milestone — demonstrating that specialized AI could surpass human experts in complex strategic games.",
            },
          ],
          links: ["machine-learning", "narrow-ai", "agi", "generative-ai"],
        },
        {
          id: "machine-learning",
          url: "topic-machine-learning.html",
          icon: "🧠",
          name: "What is Machine Learning?",
          shortName: "Machine Learning",
          source:
            "https://www.geeksforgeeks.org/machine-learning/machine-learning/",
          summary:
            "Machine Learning is a subset of AI where systems learn from data to make predictions or decisions without being explicitly programmed. It covers supervised, unsupervised, and reinforcement learning paradigms powering everything from spam filters to self-driving cars.",
          sections: [
            {
              icon: "📖",
              title: "Definition & Core Idea",
              body: `Machine Learning (ML) is a branch of AI that enables systems to <strong>learn from data</strong> and improve performance without being explicitly programmed for each task. Instead of writing rules, ML engineers provide data and the algorithm learns the rules. The core cycle: <em>Data → Model Training → Prediction → Feedback → Improved Model</em>.`,
            },
            {
              icon: "🔀",
              title: "Three Learning Paradigms",
              body: `<strong>Supervised Learning</strong> — trains on labeled data (input-output pairs). Examples: spam detection, image classification. <strong>Unsupervised Learning</strong> — finds hidden patterns in unlabeled data. Examples: customer segmentation, anomaly detection. <strong>Reinforcement Learning</strong> — agent learns by trial and error, receiving rewards. Examples: AlphaGo, robotics, RLHF for LLMs.`,
              concepts: [
                {
                  term: "Training Data",
                  def: "The dataset used to teach an ML model — the quality and quantity of training data directly impacts model performance.",
                },
                {
                  term: "Model",
                  def: "A mathematical function learned from data that maps inputs to outputs.",
                },
                {
                  term: "Overfitting",
                  def: "When a model learns training data too precisely and fails to generalize to new data.",
                },
                {
                  term: "Underfitting",
                  def: "When a model is too simple to capture the underlying patterns in data.",
                },
                {
                  term: "Feature Engineering",
                  def: "The process of selecting and transforming raw data into informative inputs for ML models.",
                },
              ],
            },
            {
              icon: "🌐",
              title: "Real-World Applications",
              body: `ML powers the modern digital world: <strong>Email Spam Filters</strong> (Naive Bayes). <strong>Netflix/Spotify Recommendations</strong> (collaborative filtering). <strong>Credit Scoring</strong> (logistic regression, random forests). <strong>Medical Imaging</strong> (CNNs detecting tumors). <strong>Voice Assistants</strong> (speech-to-text ML). <strong>Self-Driving Cars</strong> (perception, prediction, planning ML). <strong>Fraud Detection</strong> (anomaly detection).`,
            },
          ],
          subtopics: [
            {
              icon: "📐",
              name: "The Bias-Variance Tradeoff",
              badge: "Core Concept",
              content: `Every ML model faces the Bias-Variance Tradeoff: <strong>High Bias</strong> = Underfitting — model too simple, misses patterns. <strong>High Variance</strong> = Overfitting — model too complex, memorizes training data. The goal is to find the sweet spot. Techniques to reduce variance: regularization (L1/L2), dropout, cross-validation, ensemble methods. Techniques to reduce bias: more complex models, more features, longer training.`,
            },
            {
              icon: "📊",
              name: "Model Evaluation Metrics",
              badge: "Quick Reference",
              content: `Key evaluation metrics: <strong>Classification</strong>: Accuracy, Precision, Recall, F1-Score, ROC-AUC. <strong>Regression</strong>: MSE (Mean Squared Error), RMSE, MAE, R² (coefficient of determination). <strong>Cross-Validation</strong>: k-Fold splits data into k parts for robust evaluation. <strong>Confusion Matrix</strong>: True Positives, True Negatives, False Positives, False Negatives — the foundation of classification metrics.<div class="highlight-box">💡 For imbalanced datasets (rare diseases, fraud), Accuracy is misleading. Use F1-Score or ROC-AUC instead.</div>`,
            },
          ],
          flashcards: [
            {
              q: "What is Machine Learning?",
              a: "A subset of AI where systems learn from data to make predictions or decisions without being explicitly programmed for each task.",
            },
            {
              q: "What are the three main ML paradigms?",
              a: "Supervised Learning (labeled data), Unsupervised Learning (unlabeled data, finds patterns), Reinforcement Learning (trial and error with rewards).",
            },
            {
              q: "What is overfitting?",
              a: "When a model learns training data too precisely — memorizing noise — and fails to generalize to new, unseen data.",
            },
            {
              q: "What is the Bias-Variance Tradeoff?",
              a: "High Bias = underfitting (too simple). High Variance = overfitting (too complex). The goal is to balance both for good generalization.",
            },
            {
              q: "Name 3 real-world ML applications.",
              a: "Email spam filtering, Netflix/Spotify recommendations, medical imaging diagnosis, credit scoring, fraud detection, self-driving cars.",
            },
          ],
          questions: [
            {
              q: "Machine Learning is best described as:",
              options: [
                "Programming computers with explicit rules",
                "Systems that learn from data to improve performance without explicit programming",
                "A type of database management system",
                "A hardware acceleration technique",
              ],
              answer: 1,
              explain:
                "Machine Learning enables systems to learn from data and improve performance without being explicitly programmed — the algorithm discovers patterns and rules from the data itself.",
            },
            {
              q: "Which ML paradigm trains on labeled input-output pairs?",
              options: [
                "Unsupervised Learning",
                "Reinforcement Learning",
                "Supervised Learning",
                "Clustering",
              ],
              answer: 2,
              explain:
                "Supervised Learning trains on labeled datasets — each input has a corresponding known output. The model learns to map inputs to outputs and is corrected based on prediction errors.",
            },
            {
              q: "Overfitting in ML means:",
              options: [
                "The model is too simple",
                "The model memorizes training data and fails to generalize to new data",
                "The model trains too slowly",
                "The dataset is too large",
              ],
              answer: 1,
              explain:
                "Overfitting occurs when a model learns the training data too precisely — memorizing noise — causing poor performance on new, unseen data.",
            },
            {
              q: "For imbalanced classification datasets, which metric is more informative than accuracy?",
              options: [
                "Mean Squared Error",
                "R² Score",
                "F1-Score or ROC-AUC",
                "Standard Deviation",
              ],
              answer: 2,
              explain:
                "For imbalanced datasets (e.g., rare disease detection), accuracy is misleading. F1-Score balances Precision and Recall; ROC-AUC measures the trade-off across thresholds.",
            },
          ],
          links: [
            "supervised-learning",
            "unsupervised-learning",
            "reinforcement-learning",
            "what-is-ai",
          ],
        },
        {
          id: "narrow-ai",
          url: "topic-narrow-ai.html",
          icon: "🎯",
          name: "What is Narrow AI?",
          shortName: "Narrow AI",
          source:
            "https://www.geeksforgeeks.org/artificial-intelligence/what-is-narrow-ai/",
          summary:
            "Narrow AI (Weak AI / ANI) is AI designed for one specific task or a limited set of tasks. It is the only form of AI that currently exists in the real world — from voice assistants to recommendation engines.",
          sections: [
            {
              icon: "🔍",
              title: "Definition of Narrow AI",
              body: `Narrow AI (also called <strong>Weak AI</strong> or <strong>ANI</strong>) refers to AI systems designed and trained for a <em>specific purpose or limited range of tasks</em>. These systems operate under constrained, predefined conditions. <strong>All AI systems deployed today are Narrow AI</strong> — including ChatGPT (trained specifically for language tasks).`,
            },
            {
              icon: "📱",
              title: "Examples in Everyday Life",
              body: `Narrow AI is everywhere: <strong>Voice Assistants</strong> — Siri, Alexa. <strong>Recommendation Systems</strong> — Netflix, Spotify, Amazon. <strong>Facial Recognition</strong> — Face ID, photo organization. <strong>Email Spam Filters</strong>. <strong>Search Engines</strong> — Google's ranking. <strong>Navigation</strong> — Google Maps. <strong>Medical Imaging AI</strong> — tumor detection. <strong>Fraud Detection</strong> — flagging unusual transactions.`,
              concepts: [
                {
                  term: "ANI (Artificial Narrow Intelligence)",
                  def: "The technical term for Narrow AI — AI systems trained for specific, constrained tasks.",
                },
                {
                  term: "Domain Specificity",
                  def: "Narrow AI only works within its predefined domain — a chess AI cannot drive a car.",
                },
                {
                  term: "Recommendation System",
                  def: "A Narrow AI that analyzes user behavior to suggest relevant content (Netflix, Spotify, Amazon).",
                },
                {
                  term: "Computer Vision",
                  def: "Narrow AI for image and video understanding — used in facial recognition, medical imaging, and autonomous vehicles.",
                },
              ],
            },
            {
              icon: "⚖️",
              title: "Strengths & Limitations",
              body: `<strong>Strengths:</strong> Superhuman accuracy in specific tasks (chess, Go, image classification). Processes data at machine speed. 24/7 availability. <strong>Limitations:</strong> Cannot generalize — a chess AI cannot do anything else. No understanding, awareness, or common sense. Brittle in edge cases and out-of-distribution scenarios.`,
            },
          ],
          subtopics: [
            {
              icon: "🎮",
              name: "Narrow AI in Gaming: AlphaGo & AlphaZero",
              badge: "Case Study",
              content: `DeepMind's <strong>AlphaGo</strong> (2016) mastered the ancient board game Go using deep neural networks and Monte Carlo Tree Search. <strong>AlphaZero</strong> (2017) learned chess, Go, and shogi from scratch via pure self-play reinforcement learning — no human games needed. These are landmark Narrow AI achievements demonstrating superhuman performance, but neither system can perform any task outside its game domain.`,
            },
            {
              icon: "🏥",
              name: "Narrow AI in Healthcare",
              badge: "Real World",
              content: `Medical Narrow AI: <strong>Radiology AI</strong> — Google's DeepMind AI detects breast cancer in mammograms with accuracy exceeding specialist radiologists. <strong>Drug Discovery</strong> — AlphaFold (DeepMind) solved protein structure prediction — a 50-year grand challenge in biology. <strong>Pathology</strong> — AI classifies cancer biopsies. <strong>Wearables</strong> — heart arrhythmia detection. Each is a highly specialized Narrow AI within a single medical domain.`,
            },
          ],
          flashcards: [
            {
              q: "What is Narrow AI (ANI)?",
              a: "AI designed for a specific task or limited range of tasks — operates within constrained, predefined conditions. All current AI is Narrow AI.",
            },
            {
              q: "Give 4 examples of Narrow AI in daily life.",
              a: "Voice assistants (Siri/Alexa), Netflix recommendations, email spam filters, facial recognition (Face ID), Google Search.",
            },
            {
              q: "Why is ChatGPT considered Narrow AI despite its wide capabilities?",
              a: "ChatGPT is specifically trained for language tasks — it lacks genuine general intelligence, consciousness, or the ability to reason across arbitrary domains.",
            },
            {
              q: "What is the main limitation distinguishing Narrow AI from AGI?",
              a: "Narrow AI cannot generalize beyond its predefined domain — no common sense, no self-awareness, cannot handle novel tasks outside training distribution.",
            },
          ],
          questions: [
            {
              q: "Narrow AI (Weak AI) is defined as:",
              options: [
                "AI that surpasses all human abilities",
                "AI designed to perform one specific task or a limited set of tasks",
                "AI that has emotions and self-awareness",
                "AI that can learn any task without retraining",
              ],
              answer: 1,
              explain:
                "Narrow AI is designed and trained for a specific purpose — like facial recognition, chess-playing, or voice assistants — and cannot generalize beyond that defined scope.",
            },
            {
              q: "Which of the following is the best example of Narrow AI in use today?",
              options: [
                "A robot that thinks like a human on any topic",
                "Siri or Alexa responding to specific voice commands",
                "An AI that writes symphonies and also performs surgery",
                "AGI systems deployed globally",
              ],
              answer: 1,
              explain:
                "Virtual assistants like Siri or Alexa are Narrow AI — they are excellent at understanding specific commands but lack broad, general intelligence.",
            },
            {
              q: "Which major limitation defines Narrow AI compared to General AI?",
              options: [
                "Narrow AI has no practical uses",
                "Narrow AI cannot function beyond its predefined, specific scope",
                "Narrow AI is always less accurate",
                "Narrow AI requires quantum computing",
              ],
              answer: 1,
              explain:
                "Despite being highly efficient at specific tasks, Narrow AI lacks the ability to function beyond its predefined scope — it cannot generalize to new domains.",
            },
            {
              q: "Netflix and Spotify recommendation engines are examples of:",
              options: [
                "AGI systems",
                "Narrow AI using algorithms to recommend based on behavior",
                "Superintelligent AI",
                "Rule-based expert systems only",
              ],
              answer: 1,
              explain:
                "Recommender systems used by Netflix and Spotify are Narrow AI — they analyze behavior patterns to recommend content but cannot perform tasks outside this domain.",
            },
          ],
          links: ["what-is-ai", "agi", "asi", "expert-systems"],
        },
        {
          id: "agi",
          url: "topic-agi.html",
          icon: "🌐",
          name: "Artificial General Intelligence (AGI)",
          shortName: "AGI",
          source:
            "https://www.geeksforgeeks.org/artificial-intelligence/what-is-artificial-general-intelligence-agi/",
          summary:
            "AGI refers to AI that matches human-level intelligence — capable of learning and applying knowledge across any domain, like a human. It remains primarily theoretical and is the stated goal of organizations like OpenAI.",
          sections: [
            {
              icon: "🧬",
              title: "Defining AGI",
              body: `Artificial General Intelligence (AGI) — also called <strong>Strong AI</strong> or <strong>Human-Level AI</strong> — is AI that can understand, learn, and apply knowledge across a wide range of tasks, just as a human can. Unlike Narrow AI, AGI would: <strong>transfer learning across domains</strong>, <strong>reason abstractly</strong>, solve novel problems without retraining, engage in common-sense reasoning, and potentially demonstrate consciousness and self-awareness. AGI does not currently exist.`,
            },
            {
              icon: "🔬",
              title: "AGI vs. Narrow AI",
              body: `The fundamental difference: Narrow AI requires separate training for each task; AGI would generalize across all tasks. Today's most impressive AI (GPT-4, Gemini) is still Narrow AI — extraordinary at language tasks but lacking general reasoning, physical intuition, long-term planning, and embodied understanding.`,
              concepts: [
                {
                  term: "General Intelligence",
                  def: "The ability to learn, reason, and adapt across arbitrary domains — like human cognition.",
                },
                {
                  term: "Transfer Learning (AGI context)",
                  def: "At AGI level, knowledge from one domain instantly transfers to any other — like a human applying maths to music.",
                },
                {
                  term: "Turing Test",
                  def: "Proposed by Alan Turing — a test where a machine must converse indistinguishably from a human to be considered intelligent.",
                },
                {
                  term: "Common-Sense Reasoning",
                  def: "Understanding everyday world knowledge and causal relationships — a key challenge for current AI.",
                },
              ],
            },
            {
              icon: "🚦",
              title: "Current State & Research",
              body: `AGI remains a research goal, not a deployed reality. Leading organizations: <strong>OpenAI</strong> (mission: "ensuring AGI benefits all of humanity"), <strong>Google DeepMind</strong>, <strong>Anthropic</strong>, and <strong>Meta AI</strong>. In late 2024, OpenAI CEO Sam Altman suggested AGI may arrive very soon. Key challenges: common-sense reasoning, physical world understanding, causal inference, and consciousness.`,
            },
            {
              icon: "⚠️",
              title: "Safety & Ethics of AGI",
              body: `AGI poses existential safety questions: <strong>Alignment Problem</strong> — ensuring AGI's goals align with human values. <strong>Control Problem</strong> — maintaining human oversight of a system potentially smarter than its creators. <strong>Value Lock-in</strong> — AGI designed with narrow human values may perpetuate them globally. Anthropic and DeepMind's safety team specifically research AI alignment.`,
            },
          ],
          subtopics: [
            {
              icon: "🧩",
              name: "The Alignment Problem",
              badge: "Safety Research",
              content: `The Alignment Problem ensures powerful AI systems pursue goals truly beneficial to humans. A misaligned AGI could optimize for a proxy goal in ways causing unintended harm. Approaches: <strong>Constitutional AI</strong> (Anthropic) — training on principles; <strong>RLHF</strong> — human feedback guiding behavior; <strong>Interpretability research</strong> — understanding neural networks. As AI becomes more capable, misalignment risks compound.`,
            },
            {
              icon: "🤔",
              name: "Does Current AI Understand Language?",
              badge: "Philosophy",
              content: `The <strong>Chinese Room argument</strong> (John Searle, 1980) suggests a system following symbol manipulation rules may process language without genuine understanding. Critics argue LLMs are "stochastic parrots" — statistical pattern matchers. Defenders argue human understanding may also emerge from complex information processing. This philosophical debate touches the core question: do we need consciousness for AGI?`,
            },
          ],
          flashcards: [
            {
              q: "What is AGI (Artificial General Intelligence)?",
              a: "AI that matches human-level intelligence — able to learn, reason, and apply knowledge across any domain. Does not currently exist.",
            },
            {
              q: "What is the key difference between Narrow AI and AGI?",
              a: "Narrow AI excels at one specific task; AGI can generalize knowledge and reasoning across all domains like a human.",
            },
            {
              q: "What is the Alignment Problem?",
              a: "The challenge of ensuring AGI's goals truly align with human values — a misaligned AGI could optimize for wrong objectives with catastrophic results.",
            },
            {
              q: "Which major AI organizations have stated AGI as their primary mission?",
              a: "OpenAI, Google DeepMind, Anthropic, and Meta AI are among the leading organizations pursuing AGI.",
            },
          ],
          questions: [
            {
              q: "Artificial General Intelligence (AGI) refers to:",
              options: [
                "AI that can only process images",
                "AI that matches human-level intelligence — able to learn and apply knowledge across many different tasks",
                "The fastest possible computer processor",
                "A database with all human knowledge",
              ],
              answer: 1,
              explain:
                "AGI refers to AI that matches human intelligence in understanding, learning, and problem-solving — capable of performing a wide range of cognitive tasks.",
            },
            {
              q: "How does AGI differ from Narrow AI?",
              options: [
                "AGI can only play games",
                "AGI can generalize knowledge and adapt to new tasks, while Narrow AI is limited to one domain",
                "AGI uses less data than Narrow AI",
                "They are the same thing",
              ],
              answer: 1,
              explain:
                "Unlike Narrow AI, which is restricted to specific tasks, AGI can generalize knowledge, transfer skills between domains, and solve novel problems without task-specific reprogramming.",
            },
            {
              q: "What is the current status of AGI development?",
              options: [
                "AGI is fully deployed in hospitals and schools",
                "AGI remains a theoretical and research goal — not yet fully realized",
                "AGI was achieved in 2010",
                "AGI is impossible to develop",
              ],
              answer: 1,
              explain:
                "While General AI remains primarily a theoretical concept, researchers aim to develop AI systems that can perform any intellectual task a human can — requiring capabilities not yet achieved.",
            },
            {
              q: "What is the Alignment Problem in AGI research?",
              options: [
                "Making AI speak multiple languages",
                "Ensuring AGI's goals align with human values to prevent catastrophic misaligned optimization",
                "Aligning AI hardware components",
                "Synchronizing multiple AI systems",
              ],
              answer: 1,
              explain:
                "The Alignment Problem is the central challenge of ensuring powerful AI systems pursue goals that are truly beneficial to humans — a misaligned AGI could be catastrophic.",
            },
          ],
          links: ["narrow-ai", "asi", "what-is-ai", "generative-ai"],
        },
        {
          id: "asi",
          url: "topic-asi.html",
          icon: "🚀",
          name: "Artificial Super Intelligence (ASI)",
          shortName: "ASI",
          source:
            "https://www.geeksforgeeks.org/blogs/what-is-artificial-super-intelligence-asi/",
          summary:
            "ASI is a hypothetical form of AI that surpasses human intelligence in all domains. It is the subject of both optimistic anticipation and existential concern, with thinkers like Nick Bostrom warning of catastrophic risks.",
          sections: [
            {
              icon: "🌌",
              title: "What is ASI?",
              body: `Artificial Super Intelligence (ASI) is a <em>hypothetical</em> form of AI that would surpass human intelligence in <strong>all areas</strong> — cognitive, creative, and social. The concept builds on AGI: once AGI exists and can improve itself, it might recursively self-improve, leading to an <strong>intelligence explosion</strong> — rapidly reaching and vastly exceeding human-level capabilities.`,
            },
            {
              icon: "🌟",
              title: "Potential Benefits",
              body: `Proponents envision ASI solving humanity's greatest challenges: <strong>Climate Change</strong> — optimal resource management. <strong>Medicine</strong> — accelerated drug discovery, eliminating diseases. <strong>Scientific Discovery</strong> — breakthroughs in years rather than centuries. <strong>Poverty</strong> — radical resource optimization. ASI could compress centuries of human progress into years.`,
              concepts: [
                {
                  term: "Intelligence Explosion",
                  def: "The hypothetical rapid, recursive self-improvement of an AGI/ASI system — leading to superintelligence far beyond human capacity.",
                },
                {
                  term: "Existential Risk (x-risk)",
                  def: "The possibility that ASI development leads to outcomes catastrophic for humanity.",
                },
                {
                  term: "Singularity",
                  def: "The hypothetical point at which AI surpasses human intelligence and technological growth becomes uncontrollable/unpredictable.",
                },
                {
                  term: "Control Problem (ASI)",
                  def: "How to maintain meaningful human oversight of a system vastly more intelligent than any human.",
                },
              ],
            },
            {
              icon: "⚠️",
              title: "Risks & Existential Concerns",
              body: `ASI risks: <strong>Misalignment</strong> — an ASI pursuing misaligned goals could optimize against human survival. <strong>Loss of Control</strong> — a sufficiently intelligent system might prevent being shut down. <strong>Value Lock-in</strong> — ASI designed by narrow groups could impose those values permanently. Nick Bostrom's <em>Superintelligence</em> (2014) brought these risks to mainstream attention.`,
            },
          ],
          subtopics: [
            {
              icon: "📚",
              name: "Key Thinkers on ASI",
              badge: "Research",
              content: `<strong>Nick Bostrom</strong> (Oxford) — <em>Superintelligence</em> (2014) — seminal work on ASI risks. <strong>Eliezer Yudkowsky</strong> (MIRI) — argues unaligned AGI/ASI is the default without extreme care. <strong>Stuart Russell</strong> (Berkeley) — <em>Human Compatible</em> (2019) — proposes inverse RL for value alignment. <strong>Ray Kurzweil</strong> (Google) — optimistic, predicts ASI by 2045. <strong>Max Tegmark</strong> (MIT) — <em>Life 3.0</em> — explores utopian and dystopian ASI futures.`,
            },
            {
              icon: "🔐",
              name: "AI Safety Approaches for ASI",
              badge: "Safety Research",
              content: `Safety approaches: <strong>Corrigibility</strong> — AI that supports human oversight. <strong>Containment/Boxing</strong> — limiting ASI to isolated environments. <strong>Capability Control</strong> — limiting what ASI can do or know. <strong>Value Learning</strong> — AI that learns human values through observation (IRL). No consensus exists on which approach would be sufficient for a genuinely superintelligent system.`,
            },
          ],
          flashcards: [
            {
              q: "What is ASI (Artificial Super Intelligence)?",
              a: "A hypothetical AI that surpasses human intelligence in ALL areas — cognitive, creative, emotional, social. Does not currently exist.",
            },
            {
              q: 'What is the "Intelligence Explosion"?',
              a: "The hypothetical process where an AGI improves itself recursively, rapidly reaching and vastly exceeding human-level intelligence.",
            },
            {
              q: 'Who wrote "Superintelligence" and what is its main argument?',
              a: "Nick Bostrom (Oxford, 2014) — argues that a superintelligent AI with misaligned goals poses an existential risk to humanity.",
            },
            {
              q: "What is the Control Problem in ASI?",
              a: "How to maintain meaningful human oversight of a system potentially far more intelligent than any human — possibly preventing its own shutdown.",
            },
          ],
          questions: [
            {
              q: "Artificial Super Intelligence (ASI) is:",
              options: [
                "Current state of most AI systems",
                "A hypothetical AI that surpasses human intelligence in all areas",
                "An AI that only excels in one narrow task",
                "A synonym for AGI",
              ],
              answer: 1,
              explain:
                "ASI is a hypothetical form of AI that would surpass human intelligence in all areas — cognitive, creative, emotional, and social. It does not currently exist.",
            },
            {
              q: "What is the key concern about ASI development?",
              options: [
                "It will cost too much electricity",
                "Ethical and existential risks — machines surpassing and potentially becoming uncontrollable by humans",
                "It will make computers too slow",
                "It only works with specific programming languages",
              ],
              answer: 1,
              explain:
                "ASI raises major ethical and safety concerns — the possibility that superintelligent machines could surpass human control is considered an existential risk.",
            },
            {
              q: 'What is the "Intelligence Explosion" in the context of ASI?',
              options: [
                "Rapid increase in internet users",
                "The process where AGI recursively self-improves, rapidly reaching superintelligent levels",
                "A sudden increase in AI funding",
                "The speed at which neural networks process data",
              ],
              answer: 1,
              explain:
                "The Intelligence Explosion is the hypothetical process where AGI improves itself recursively, with each iteration more capable — rapidly exceeding human-level intelligence.",
            },
            {
              q: "Which of the following could be a potential benefit of ASI?",
              options: [
                "Increasing manual labor requirements",
                "Accelerating solutions to climate change, disease treatment, and scientific discovery",
                "Eliminating all forms of creativity",
                "Making human decision-making obsolete with no benefits",
              ],
              answer: 1,
              explain:
                "ASI could potentially solve problems like climate change, find disease treatments faster, optimize resources, and revolutionize healthcare, energy, and scientific research.",
            },
          ],
          links: ["agi", "narrow-ai", "what-is-ai"],
        },
        {
          id: "generative-ai",
          url: "topic-generative-ai.html",
          icon: "✨",
          name: "What is Generative AI?",
          shortName: "Generative AI",
          source:
            "https://www.geeksforgeeks.org/artificial-intelligence/what-is-generative-ai/",
          summary:
            "Generative AI creates entirely new content — text, images, audio, video, and code — by learning patterns from existing data. It powers LLMs (like ChatGPT), image generators (DALL·E), and is augmented by RAG and fine-tuning for specialized tasks.",
          sections: [
            {
              icon: "💡",
              title: 'What Makes it "Generative"?',
              body: `Unlike traditional discriminative AI (which classifies existing data), <strong>Generative AI</strong> creates brand-new content by learning underlying data distributions. It can produce text, images, audio, video, and code. Key model families: <strong>LLMs</strong> (GPT-4, Claude, Gemini); <strong>Diffusion Models</strong> (DALL·E, Stable Diffusion); <strong>GANs</strong> (Generative Adversarial Networks); <strong>VAEs</strong> (Variational Autoencoders).`,
            },
            {
              icon: "🏗️",
              title: "How LLMs Work",
              body: `Large Language Models (LLMs) are built on the <strong>Transformer architecture</strong>, using self-attention mechanisms to process entire sequences simultaneously. They are trained via <strong>self-supervised learning</strong> on massive text corpora. The training objective is to predict the next token. After pre-training, models are fine-tuned using labeled data or RLHF. Modern LLMs (GPT-4, Claude) have hundreds of billions of parameters.`,
              concepts: [
                {
                  term: "LLM (Large Language Model)",
                  def: "Advanced AI trained on massive text data to understand and generate human-like language — the backbone of ChatGPT, Claude, Gemini.",
                },
                {
                  term: "Transformer Architecture",
                  def: "The neural network architecture behind modern LLMs — uses self-attention to understand context across long sequences.",
                },
                {
                  term: "Diffusion Models",
                  def: "Generative models that start with random noise and iteratively remove it to produce realistic images or audio.",
                },
                {
                  term: "RAG (Retrieval-Augmented Generation)",
                  def: "Combines LLMs with external knowledge retrieval to produce factually grounded responses — reducing hallucinations.",
                },
              ],
            },
            {
              icon: "🎨",
              title: "Types of Generated Content",
              body: `Generative AI spans multiple modalities: <strong>Text</strong> — chatbots, summarization, code generation (GitHub Copilot). <strong>Images</strong> — digital art, product design (DALL·E, Midjourney). <strong>Audio</strong> — voice cloning, music composition. <strong>Video</strong> — animation, training simulations (Sora). <strong>Code</strong> — automated programming assistance.`,
            },
            {
              icon: "⚠️",
              title: "Limitations & Challenges",
              body: `Key limitations: <strong>Hallucinations</strong> — models confidently generate incorrect information. <strong>Data Bias</strong> — biased training produces biased outputs. <strong>Copyright concerns</strong> — models may reproduce training data. <strong>Computational cost</strong> — training requires enormous resources. RAG and fine-tuning are primary strategies to mitigate hallucinations.`,
            },
          ],
          subtopics: [
            {
              icon: "🔄",
              name: "Diffusion Models — How They Work",
              badge: "Sub-Technology",
              content: `Diffusion models work via: <strong>Forward Diffusion</strong> — gradually adds noise to training data until it becomes pure noise. <strong>Reverse Diffusion</strong> — the model learns to remove noise step by step. At inference, the model starts from pure random noise and denoises iteratively. DALL·E, Stable Diffusion, and Midjourney all use diffusion architectures.`,
            },
            {
              icon: "📡",
              name: "RAG — Retrieval-Augmented Generation",
              badge: "Linked Sub-Topic",
              content: `RAG: 1. Receives user query. 2. Encodes query into vector embedding. 3. Retrieves similar documents from vector database. 4. Augments prompt with retrieved context. 5. Generates grounded response. Benefits: access to updated info, reduced hallucinations, domain expertise without retraining.<div class="highlight-box">🔗 RAG allows LLMs to be accurate in specialized domains like law, medicine, finance without expensive retraining.</div>`,
            },
            {
              icon: "⚡",
              name: "Fine-Tuning & RLHF",
              badge: "Training Technique",
              content: `<strong>Fine-tuning</strong> adapts a pre-trained model on domain-specific labeled data for specialized tasks. <strong>RLHF (Reinforcement Learning from Human Feedback)</strong> — human raters evaluate model outputs, training a reward model from their preferences. The LLM is then optimized using RL to maximize human-preferred responses. RLHF transformed GPT-3 into ChatGPT — making models helpful, harmless, and honest. <strong>LoRA/QLoRA</strong> enables parameter-efficient fine-tuning with minimal GPU memory.`,
            },
          ],
          flashcards: [
            {
              q: "What distinguishes Generative AI from traditional discriminative AI?",
              a: "Traditional AI classifies existing data; Generative AI creates entirely new content (text, images, audio, code) by learning underlying data distributions.",
            },
            {
              q: "What is a Large Language Model (LLM)?",
              a: "An AI trained on massive text datasets using the Transformer architecture — capable of understanding and generating human-like text across many tasks.",
            },
            {
              q: "How do Diffusion Models generate images?",
              a: "Forward diffusion corrupts data with noise; reverse diffusion denoises step by step from random noise to produce realistic images.",
            },
            {
              q: "What is RAG and why is it important?",
              a: "Retrieval-Augmented Generation combines LLMs with external document retrieval — reducing hallucinations and giving models access to updated, accurate information.",
            },
            {
              q: "What is RLHF?",
              a: "Reinforcement Learning from Human Feedback — humans rate model outputs, training a reward model that guides the LLM to produce preferred (helpful, harmless) responses.",
            },
          ],
          questions: [
            {
              q: "What makes Generative AI distinct from traditional AI?",
              options: [
                "It only classifies data",
                "It can generate entirely new content like text, images, audio, and code",
                "It only works offline",
                "It uses less data than traditional AI",
              ],
              answer: 1,
              explain:
                "Generative AI focuses on building models that can create new content such as text, images, audio, and code by learning patterns from existing data.",
            },
            {
              q: "Which of the following is an example of a generative AI image model?",
              options: [
                "SQL Server",
                "DALL·E / Stable Diffusion",
                "Apache Hadoop",
                "TensorBoard",
              ],
              answer: 1,
              explain:
                "Diffusion models like DALL·E or Stable Diffusion start with noise and iteratively denoise it to create realistic visuals — these are generative AI image models.",
            },
            {
              q: "What is RLHF used for in LLM training?",
              options: [
                "Initial pre-training on internet data",
                "Using human feedback to fine-tune models toward helpful, harmless responses",
                "Compressing model parameters",
                "Encrypting model weights",
              ],
              answer: 1,
              explain:
                "RLHF (Reinforcement Learning from Human Feedback) uses human-rated outputs to train a reward model, which guides LLM optimization — transforming GPT-3 into ChatGPT.",
            },
            {
              q: 'What is a main limitation of Generative AI called "hallucination"?',
              options: [
                "Models run too slowly",
                "Models confidently generate incorrect or fabricated information",
                "Models only work with images",
                "Models require too much storage",
              ],
              answer: 1,
              explain:
                "Hallucination is when generative AI models confidently produce incorrect, misleading, or entirely fabricated information — a key limitation addressed by RAG and fine-tuning.",
            },
            {
              q: "What does RAG stand for and what problem does it solve?",
              options: [
                "Random Aggregation Gradient — solves overfitting",
                "Retrieval-Augmented Generation — reduces hallucinations by grounding responses in retrieved documents",
                "Recurrent Attention Gate — improves RNN memory",
                "Recursive Abstraction Graph — structures knowledge bases",
              ],
              answer: 1,
              explain:
                "RAG (Retrieval-Augmented Generation) combines LLMs with external document retrieval — giving models access to updated information and reducing factual hallucinations.",
            },
          ],
          links: ["machine-learning", "nlp", "ai-models", "what-is-ai"],
        },
        {
          id: "nlp",
          url: "topic-nlp.html",
          icon: "💬",
          name: "Natural Language Processing (NLP)",
          shortName: "NLP",
          source:
            "https://www.geeksforgeeks.org/nlp/natural-language-processing-nlp-tutorial/",
          summary:
            "NLP is the field of AI that enables computers to understand, interpret, and generate human language. It encompasses preprocessing techniques, classical algorithms, and modern Transformer models (BERT, GPT) used for tasks like sentiment analysis, translation, NER, and question answering.",
          sections: [
            {
              icon: "📝",
              title: "What is NLP?",
              body: `Natural Language Processing (NLP) is a field of AI focused on the interaction between computers and human language. The goal is for machines to understand, interpret, and generate meaningful natural language — bridging human communication and computer processing. NLP underpins voice assistants, search engines, chatbots, translation tools, and content moderation.`,
            },
            {
              icon: "🔧",
              title: "Core Preprocessing Techniques",
              body: `Text preparation steps: <strong>Tokenization</strong> — splitting text into words/sentences. <strong>Stopword Removal</strong> — removing common words (and, the, is). <strong>Stemming</strong> — reducing to root form (running → run). <strong>Lemmatization</strong> — reducing to dictionary base form. <strong>POS Tagging</strong> — assigning grammatical roles (noun, verb) to each word.`,
              concepts: [
                {
                  term: "Tokenization",
                  def: "Splitting text into smaller units (tokens: words, subwords, sentences) for processing.",
                },
                {
                  term: "Stemming",
                  def: "Reducing words to their base/root form by removing suffixes (runs → run, running → run).",
                },
                {
                  term: "Lemmatization",
                  def: "More sophisticated than stemming — reduces words to their dictionary base form considering context (better → good).",
                },
                {
                  term: "POS Tagging",
                  def: "Assigning grammatical parts of speech (noun, verb, adjective) to each word in a sentence.",
                },
                {
                  term: "NER (Named Entity Recognition)",
                  def: "Identifies and classifies named entities (people, organizations, locations, dates) in text.",
                },
              ],
            },
            {
              icon: "🔬",
              title: "NLP Tasks & Applications",
              body: `Key NLP tasks: <strong>Text Classification</strong> — categorizing text (spam detection, sentiment). <strong>NER</strong> — identifying entities (Google → Organization; London → Location). <strong>Machine Translation</strong> — translating between languages. <strong>Question Answering</strong> — answering based on context. <strong>Sentiment Analysis</strong> — emotional tone detection. <strong>Speech Recognition</strong> — converting spoken words to text (ASR).`,
            },
            {
              icon: "⚡",
              title: "Modern NLP: Transformer Models",
              body: `The 2017 <strong>Transformer architecture</strong> (Attention Is All You Need) revolutionized NLP. <strong>BERT</strong> — Google's bidirectional model for NER, classification, QA. <strong>GPT</strong> — OpenAI's autoregressive generative models. <strong>T5</strong> — frames all NLP tasks as text-to-text transformations. These models are pre-trained on massive text corpora and fine-tuned for specific tasks.`,
            },
          ],
          subtopics: [
            {
              icon: "🔤",
              name: "BERT — Bidirectional Encoder Representations",
              badge: "Transformer Model",
              content: `BERT reads text bidirectionally — left and right context simultaneously. Pre-trained on: <strong>Masked Language Modeling (MLM)</strong> — predicting masked words, and <strong>Next Sentence Prediction (NSP)</strong>. Fine-tuned for Sentiment Analysis (classification on [CLS] token), NER (token-level classification), and QA (predicting answer start/end positions). BERT BASE has 12 transformer layers; BERT LARGE has 24.`,
            },
            {
              icon: "🗂️",
              name: "NER — Named Entity Recognition",
              badge: "NLP Task",
              content: `NER classifies named entities: People (B-PER), Locations (B-LOC), Organizations (B-ORG), Dates. Uses <strong>BIO tagging</strong>: B=Beginning, I=Inside, O=Outside. Modern NER uses BERT contextual embeddings that resolve ambiguity (e.g., "Apple" = company vs. fruit based on context). Tools: spaCy, NLTK, Hugging Face Transformers.<div class="highlight-box">Example: "John lives in New York" → John: B-PER, New: B-LOC, York: I-LOC</div>`,
            },
          ],
          flashcards: [
            {
              q: "What is NLP?",
              a: "Natural Language Processing — the field of AI that enables computers to understand, interpret, and generate human language.",
            },
            {
              q: "What is Tokenization?",
              a: "Splitting text into smaller units (tokens: words, subwords, or sentences) as the first step in NLP processing.",
            },
            {
              q: "What is the difference between Stemming and Lemmatization?",
              a: "Stemming crudely cuts word suffixes to a root. Lemmatization more accurately reduces to dictionary base form using linguistic knowledge.",
            },
            {
              q: "What makes BERT bidirectional?",
              a: "BERT reads text in both left and right context simultaneously (unlike GPT which is unidirectional). This gives it deeper contextual understanding.",
            },
            {
              q: "What is Named Entity Recognition (NER)?",
              a: "An NLP task that identifies and classifies named entities in text: people, organizations, locations, dates, etc.",
            },
          ],
          questions: [
            {
              q: "NLP stands for:",
              options: [
                "Network Layer Protocol",
                "Natural Language Processing",
                "Neural Logic Programming",
                "Numeric Learning Process",
              ],
              answer: 1,
              explain:
                "NLP stands for Natural Language Processing — a field of AI focused on how computers understand, interpret, and generate human language.",
            },
            {
              q: "Which is a common preprocessing step in NLP?",
              options: [
                "Pixel filtering",
                "Tokenization — splitting text into words or sentences",
                "Voltage normalization",
                "Model deployment",
              ],
              answer: 1,
              explain:
                "Tokenization is a fundamental NLP preprocessing step — it splits text into smaller units like words or sentences for further processing.",
            },
            {
              q: "What makes BERT different from earlier NLP models?",
              options: [
                "It is a traditional rule-based system",
                "It reads text bidirectionally for richer contextual understanding",
                "It can only process English text",
                "It requires no training data",
              ],
              answer: 1,
              explain:
                "BERT (Bidirectional Encoder Representations from Transformers) reads text in both directions simultaneously — giving it deeper contextual understanding than previous unidirectional models.",
            },
            {
              q: "Sentiment Analysis in NLP is used to:",
              options: [
                "Detect malware in code",
                "Identify emotions or opinions expressed in text (positive/negative/neutral)",
                "Convert speech to text only",
                "Sort numerical data",
              ],
              answer: 1,
              explain:
                "Sentiment Analysis determines whether text expresses positive, negative, or neutral emotion — used for product reviews, social media monitoring, and brand analysis.",
            },
            {
              q: "Which NLP library provides tools for tokenization, stemming, and POS tagging in Python?",
              options: [
                "Pandas",
                "Scikit-learn",
                "NLTK (Natural Language Toolkit)",
                "NumPy",
              ],
              answer: 2,
              explain:
                "NLTK (Natural Language Toolkit) is a popular open-source Python library that provides tools for NLP tasks such as tokenization, stemming, and part-of-speech tagging.",
            },
          ],
          links: [
            "generative-ai",
            "what-is-ai",
            "machine-learning",
            "ai-models",
          ],
        },
        {
          id: "expert-systems",
          url: "topic-expert-systems.html",
          icon: "🧑‍⚕️",
          name: "Expert Systems",
          shortName: "Expert Systems",
          source:
            "https://www.geeksforgeeks.org/artificial-intelligence/expert-systems/",
          summary:
            "Expert Systems are traditional AI programs that simulate human expert decision-making using a knowledge base of if-then rules and an inference engine. Used in medicine, finance, and customer service, they were an early milestone in practical AI deployment.",
          sections: [
            {
              icon: "🏥",
              title: "What are Expert Systems?",
              body: `Expert Systems are AI programs designed to simulate the decision-making abilities of a <strong>human expert</strong> in a specific domain. They encode specialist knowledge as <em>if-then rules</em> and use an inference engine to apply those rules to new situations. Classic examples: <strong>MYCIN</strong> (medical diagnosis) and <strong>XCON</strong> (computer configuration). They were a major AI achievement of the 1970s–1990s.`,
            },
            {
              icon: "🏗️",
              title: "Core Components",
              body: `Two core components: <strong>1. Knowledge Base</strong> — stores domain-specific knowledge as facts and if-then rules (e.g., "IF fever > 38.5°C AND cough THEN possible influenza"). Built by Knowledge Engineers who interview domain experts. <strong>2. Inference Engine</strong> — applies rules to user input using <em>Forward Chaining</em> (data-driven, from facts to conclusion) or <em>Backward Chaining</em> (goal-driven, from hypothesis backward to facts).`,
              concepts: [
                {
                  term: "Knowledge Base",
                  def: "Stores domain expertise as facts and if-then rules.",
                },
                {
                  term: "Inference Engine",
                  def: "Applies knowledge base rules to user inputs to derive conclusions.",
                },
                {
                  term: "Forward Chaining",
                  def: "Data-driven reasoning — starts from known facts and applies rules until a conclusion is reached.",
                },
                {
                  term: "Backward Chaining",
                  def: "Goal-driven reasoning — starts from a hypothesis and works backward to verify it against facts.",
                },
                {
                  term: "Knowledge Engineer",
                  def: "Specialist who translates domain expert knowledge into formal rules for the knowledge base.",
                },
              ],
            },
            {
              icon: "🌐",
              title: "Applications",
              body: `Used in: <strong>Medical Diagnosis</strong> — MYCIN; modern radiology AI. <strong>Financial Planning</strong> — loan approval, credit risk, fraud detection rules. <strong>Customer Service</strong> — rule-based chatbots and troubleshooting. <strong>Legal Research</strong> — retrieving relevant case law. <strong>Engineering</strong> — design and configuration (XCON).`,
            },
            {
              icon: "⚖️",
              title: "Advantages & Limitations",
              body: `<strong>Advantages:</strong> Consistent decisions; 24/7 availability; documented knowledge; no human fatigue. <strong>Limitations:</strong> Cannot learn from new data (unlike ML); knowledge acquisition is labor-intensive; brittle outside predefined scope; difficult to maintain as domain knowledge evolves.`,
            },
          ],
          subtopics: [
            {
              icon: "🔗",
              name: "Expert Systems vs. Machine Learning",
              badge: "Comparison",
              content: `Expert Systems encode human-crafted rules explicitly — they don't learn. ML systems learn rules implicitly from data. Modern AI often combines both: a neural network makes a diagnosis, while a rule-based system ensures clinical safety constraints. Expert Systems excel where rules are well-defined and explainability is paramount — unlike black-box neural networks.`,
            },
            {
              icon: "🌀",
              name: "Fuzzy Logic in Expert Systems",
              badge: "Extension",
              content: `Traditional Expert Systems use crisp binary rules (true/false). <strong>Fuzzy Logic</strong> extends this with degrees of truth (e.g., temperature is "slightly high"). This handles uncertainty better, mirroring human reasoning. Applications: industrial control systems, medical diagnosis with ambiguous symptoms, and financial risk assessment.`,
            },
          ],
          flashcards: [
            {
              q: "What is an Expert System?",
              a: "An AI program that simulates human expert decision-making using a knowledge base of if-then rules and an inference engine.",
            },
            {
              q: "What are the two core components of an Expert System?",
              a: "Knowledge Base (rules and facts) and Inference Engine (applies rules to derive conclusions).",
            },
            {
              q: "What is Forward Chaining?",
              a: "Data-driven reasoning — starts from known facts and applies rules forward until reaching a conclusion.",
            },
            {
              q: "What is Backward Chaining?",
              a: "Goal-driven reasoning — starts from a hypothesis and works backward to check if supporting facts exist.",
            },
            {
              q: "What is a major limitation of Expert Systems compared to ML?",
              a: "Expert Systems cannot learn from new data — they only know what was manually programmed into the knowledge base.",
            },
          ],
          questions: [
            {
              q: "What is an Expert System?",
              options: [
                "A computer built by experts",
                "An AI program that simulates the decision-making ability of human experts using rules and knowledge",
                "A search engine for technical manuals",
                "A type of neural network",
              ],
              answer: 1,
              explain:
                "Expert Systems are AI programs that simulate the decision-making abilities of a human expert, using a knowledge base and inference engine with if-then rules.",
            },
            {
              q: "What two core components make up an Expert System?",
              options: [
                "Mouse and Keyboard",
                "Knowledge Base and Inference Engine",
                "RAM and ROM",
                "GPU and CPU",
              ],
              answer: 1,
              explain:
                "An Expert System is built from a Knowledge Base (human expertise encoded as rules) and an Inference Engine (logical processing to reach conclusions).",
            },
            {
              q: "What is Forward Chaining in Expert Systems?",
              options: [
                "Reasoning backward from a goal",
                "Data-driven reasoning that starts from facts and works toward a conclusion",
                "A technique to compress knowledge bases",
                "A method for training ML models",
              ],
              answer: 1,
              explain:
                "Forward Chaining is data-driven reasoning — it starts from known facts and applies rules forward until a conclusion is reached.",
            },
            {
              q: "What is a major limitation of Expert Systems?",
              options: [
                "They run too slowly",
                "They cannot learn from new data — only know what was manually programmed",
                "They require internet connection",
                "They only work in English",
              ],
              answer: 1,
              explain:
                "Expert Systems cannot learn from new data — their knowledge is entirely determined by what was manually programmed into the knowledge base by knowledge engineers.",
            },
          ],
          links: ["what-is-ai", "narrow-ai", "ai-models"],
        },
        {
          id: "ai-models",
          url: "topic-ai-models.html",
          icon: "📊",
          name: "Common AI Models & When to Use Them",
          shortName: "AI Models",
          source:
            "https://www.geeksforgeeks.org/artificial-intelligence/common-ai-models-and-when-to-use-them/",
          summary:
            "Different AI tasks require different model architectures. CNNs excel at images, RNNs/LSTMs for sequential data, Transformers for NLP, GANs for generation. Choosing the right model depends on data type, task, and computational constraints.",
          sections: [
            {
              icon: "🗺️",
              title: "Model Selection Framework",
              body: `Choosing the right AI model depends on: <strong>Data type</strong> (image, text, time series, tabular), <strong>Task type</strong> (classification, generation, clustering, regression), <strong>Computational resources</strong>, and <strong>Labeled data availability</strong>. Traditional models work well for structured data; deep learning excels for unstructured data at scale.`,
            },
            {
              icon: "🖼️",
              title: "CNNs — Convolutional Neural Networks",
              body: `Best for: <strong>image and video processing</strong>. CNNs use convolutional filters that slide across images to detect local features (edges, textures, objects). Multiple layers hierarchically combine simple features into complex representations. Applications: image classification (ImageNet), object detection (YOLO), medical imaging, facial recognition.`,
              concepts: [
                {
                  term: "CNN (Convolutional Neural Network)",
                  def: "Best for image/video — uses sliding filter kernels to detect local features hierarchically.",
                },
                {
                  term: "RNN / LSTM",
                  def: "Best for sequential data (time series, text, speech) — maintains memory of previous inputs.",
                },
                {
                  term: "Transformer",
                  def: "Best for NLP and multimodal tasks — uses self-attention to understand long-range relationships in sequences.",
                },
                {
                  term: "GAN (Generative Adversarial Network)",
                  def: "Best for generating synthetic data — generator creates samples; discriminator evaluates them.",
                },
              ],
            },
            {
              icon: "📈",
              title: "RNNs, LSTMs — Sequential Models",
              body: `Best for: <strong>sequential data</strong> — time series forecasting, speech recognition, natural language. RNNs maintain a hidden state capturing sequential context. <strong>LSTMs</strong> (Long Short-Term Memory) solve the vanishing gradient problem with gated memory cells. Applications: stock price prediction, machine translation, text generation.`,
            },
            {
              icon: "⚡",
              title: "Transformers & GANs",
              body: `<strong>Transformers</strong> process entire sequences simultaneously using self-attention — enabling massive parallelization and long-range dependency capture. They form the backbone of BERT, GPT, ViT. <strong>GANs</strong> use a Generator (creates synthetic data) vs. Discriminator (detects fakes) in adversarial training — used for image synthesis, data augmentation.`,
            },
          ],
          subtopics: [
            {
              icon: "🔄",
              name: "Model Selection Guide by Task",
              badge: "Quick Reference",
              content: `<ul class="sub-list"><li><strong>Image Classification:</strong> CNN (ResNet, EfficientNet, ViT)</li><li><strong>Object Detection:</strong> YOLO, Faster R-CNN</li><li><strong>Text Classification/NER:</strong> BERT, DistilBERT</li><li><strong>Text Generation:</strong> GPT-3/4, LLaMA, Mistral</li><li><strong>Time Series:</strong> LSTM, Temporal Fusion Transformer</li><li><strong>Image Generation:</strong> Stable Diffusion, StyleGAN</li><li><strong>Tabular Data:</strong> XGBoost, LightGBM, Random Forest</li></ul><div class="highlight-box">💡 Rule of thumb: For structured/tabular data, tree-based methods (XGBoost) often outperform deep learning. For unstructured data, deep learning is dominant.</div>`,
            },
            {
              icon: "🏗️",
              name: "Foundation Models & Transfer Learning",
              badge: "Modern Approach",
              content: `Foundation Models are large models pre-trained on massive datasets (internet-scale text, image-text pairs) that can be fine-tuned for many downstream tasks. Examples: GPT-4, BERT, CLIP, SAM. This paradigm has largely replaced training specialized models from scratch — dramatically lowering compute and data requirements for new AI applications.`,
            },
          ],
          flashcards: [
            {
              q: "Which model architecture is best for image classification?",
              a: "Convolutional Neural Networks (CNNs) — they use sliding filter kernels to detect hierarchical image features. Modern variants: ResNet, EfficientNet, ViT.",
            },
            {
              q: "When should you use an LSTM over a standard RNN?",
              a: "For long sequences with long-term dependencies — LSTMs use gated memory cells to selectively retain or forget information, solving the vanishing gradient problem.",
            },
            {
              q: "What makes Transformers better than RNNs for NLP?",
              a: "Transformers process entire sequences simultaneously using self-attention, capturing long-range dependencies and enabling massive parallelization.",
            },
            {
              q: "How does a GAN work?",
              a: "A Generator creates synthetic data while a Discriminator tries to tell real from fake. Through adversarial training, the Generator improves until it creates realistic outputs.",
            },
            {
              q: "For tabular/structured data, what model family typically outperforms deep learning?",
              a: "Tree-based methods — XGBoost, LightGBM, Random Forest — consistently outperform deep learning on tabular/structured datasets.",
            },
          ],
          questions: [
            {
              q: "Convolutional Neural Networks (CNNs) are primarily used for:",
              options: [
                "Sequential text data",
                "Processing images, video, and other 2D data",
                "Financial forecasting only",
                "Reinforcement learning tasks",
              ],
              answer: 1,
              explain:
                "CNNs are dominant in processing images and video — they use sliding filter kernels to detect hierarchical visual features, ideal for image classification and computer vision tasks.",
            },
            {
              q: "When should you use a Recurrent Neural Network (RNN) or LSTM?",
              options: [
                "For static image classification",
                "For sequential data such as time series, speech, or natural language",
                "For clustering unlabeled images",
                "For rule-based expert systems",
              ],
              answer: 1,
              explain:
                "RNNs and LSTMs are effective for sequential data such as time series or natural language — they maintain memory of previous inputs, ideal for speech and text processing.",
            },
            {
              q: "What is the purpose of Generative Adversarial Networks (GANs)?",
              options: [
                "To classify existing data only",
                "To generate new, realistic data samples using a generator-discriminator architecture",
                "To compress databases",
                "To replace supervised learning entirely",
              ],
              answer: 1,
              explain:
                "GANs use a dual-network architecture: a generator creates synthetic data while a discriminator evaluates it. They're used for data augmentation, image generation, and creative content.",
            },
            {
              q: "For tabular structured data, which model family typically outperforms deep learning?",
              options: [
                "Transformers",
                "CNNs",
                "Tree-based methods like XGBoost and Random Forest",
                "Diffusion models",
              ],
              answer: 2,
              explain:
                "Tree-based methods like XGBoost, LightGBM, and Random Forest consistently outperform deep learning on structured/tabular data — they handle heterogeneous features better.",
            },
          ],
          links: [
            "machine-learning",
            "nlp",
            "generative-ai",
            "supervised-learning",
          ],
        },
        {
          id: "supervised-learning",
          url: "topic-supervised-learning.html",
          icon: "📚",
          name: "Supervised Machine Learning",
          shortName: "Supervised Learning",
          source:
            "https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/",
          summary:
            "Supervised Learning trains models on labeled datasets (input-output pairs) to predict or classify new data. Key algorithms include Linear/Logistic Regression, Decision Trees, Random Forest, SVM, and Neural Networks.",
          sections: [
            {
              icon: "🏷️",
              title: "What is Supervised Learning?",
              body: `Supervised Learning is ML where models are trained on <strong>labeled datasets</strong> — each training example has an input and a corresponding correct output. The model learns to map inputs to outputs and is adjusted to minimize prediction errors. The goal is generalization: performing well on <em>new, unseen data</em>.`,
            },
            {
              icon: "📐",
              title: "Two Categories: Regression & Classification",
              body: `<strong>Regression</strong> — predicts <em>continuous numerical values</em> (house price, temperature). Algorithms: Linear Regression, Ridge, Polynomial. <strong>Classification</strong> — predicts <em>categorical labels</em> (spam/not-spam, cat/dog). Algorithms: Logistic Regression, Decision Trees, SVM, K-NN, Neural Networks. Evaluation: Regression uses MSE/RMSE; Classification uses Accuracy, Precision, Recall, F1-Score.`,
              concepts: [
                {
                  term: "Linear Regression",
                  def: "Predicts continuous values by fitting a straight line between inputs and numerical output.",
                },
                {
                  term: "Logistic Regression",
                  def: "Classifies binary outcomes (yes/no) using a sigmoid function to output probabilities.",
                },
                {
                  term: "Decision Tree",
                  def: "Tree-like flowchart — makes decisions through a series of simple yes/no questions at each node.",
                },
                {
                  term: "SVM (Support Vector Machine)",
                  def: "Finds the optimal boundary (hyperplane) that maximizes the margin between classes.",
                },
                {
                  term: "K-Nearest Neighbors (K-NN)",
                  def: "Classifies based on the labels of the k most similar training examples.",
                },
              ],
            },
            {
              icon: "📊",
              title: "Evaluation Metrics",
              body: `<strong>Classification:</strong> Accuracy = correct/total. Precision = TP/(TP+FP). Recall = TP/(TP+FN). F1-Score = harmonic mean of precision & recall (best for imbalanced datasets). ROC-AUC = area under ROC curve. <strong>Regression:</strong> MSE (Mean Squared Error), RMSE, MAE (Mean Absolute Error), R² (coefficient of determination).`,
            },
            {
              icon: "🌍",
              title: "Real-World Applications",
              body: `Supervised learning powers: <strong>Email Spam Detection</strong> (Naive Bayes, SVM). <strong>Medical Diagnosis</strong> (disease classification). <strong>Fraud Detection</strong> (labeled transaction history). <strong>Credit Scoring</strong> (loan default prediction). <strong>Image Classification</strong> (CNNs). <strong>Sentiment Analysis</strong> (text classification). <strong>Autonomous Vehicles</strong> (object detection and lane classification).`,
            },
          ],
          subtopics: [
            {
              icon: "🌲",
              name: "Decision Trees & Random Forests — Deep Dive",
              badge: "Algorithm Detail",
              content: `A <strong>Decision Tree</strong> recursively splits training data based on features that maximize information gain (or minimize Gini impurity). Each leaf is a final prediction. Trees are highly interpretable but prone to overfitting. <strong>Random Forest</strong> builds hundreds of trees on random data and feature subsets (Bagging + Feature Randomness). Final predictions: majority vote (classification) or average (regression). One of the most reliable general-purpose ML algorithms.`,
            },
            {
              icon: "⚖️",
              name: "Train-Test Split, Cross-Validation & Bias-Variance",
              badge: "ML Fundamentals",
              content: `Data splits: <strong>Training set</strong> (~60-80%) — model learns. <strong>Validation set</strong> (~10-20%) — hyperparameter tuning. <strong>Test set</strong> (~10-20%) — final evaluation. <strong>k-Fold Cross-Validation</strong> — splits data into k parts, trains on k-1 and tests on remaining fold — repeated k times for robust estimates. <strong>Bias-Variance Tradeoff</strong>: High Bias = underfitting; High Variance = overfitting. Goal: balance both.`,
            },
          ],
          flashcards: [
            {
              q: "What distinguishes Supervised Learning from Unsupervised Learning?",
              a: "Supervised uses labeled data (known input-output pairs). Unsupervised uses unlabeled data and discovers patterns independently.",
            },
            {
              q: "What is the difference between Regression and Classification?",
              a: "Regression predicts continuous numerical values (house price). Classification predicts categorical labels (spam/not spam, cat/dog).",
            },
            {
              q: "What is F1-Score and when is it preferred over Accuracy?",
              a: "F1-Score is the harmonic mean of Precision and Recall. Preferred for imbalanced datasets where one class is much more common.",
            },
            {
              q: "What is the Bias-Variance Tradeoff?",
              a: "High Bias = underfitting (model too simple). High Variance = overfitting (model too complex). Goal: find the sweet spot balancing both.",
            },
            {
              q: "What is k-Fold Cross-Validation?",
              a: "Data is split into k parts; the model trains on k-1 folds and tests on the remaining fold — repeated k times for robust performance estimates.",
            },
          ],
          questions: [
            {
              q: "In Supervised Learning, the training data must be:",
              options: [
                "Unlabeled and unstructured",
                "Labeled — meaning each input has a corresponding correct output",
                "Random and incomplete",
                "Collected from social media only",
              ],
              answer: 1,
              explain:
                "Supervised learning uses labeled datasets — each input has a known corresponding output. The model learns to map inputs to outputs and is adjusted based on errors.",
            },
            {
              q: "Which algorithm is best suited for predicting a continuous numerical value?",
              options: [
                "K-Means Clustering",
                "Linear Regression",
                "Principal Component Analysis (PCA)",
                "Hierarchical Clustering",
              ],
              answer: 1,
              explain:
                "Linear Regression is used to predict continuous numerical values, finding the relationship between input features and a numerical output.",
            },
            {
              q: "Random Forest is an improvement over a single Decision Tree because:",
              options: [
                "It uses fewer data points",
                "It combines multiple decision trees, improving accuracy and reducing overfitting",
                "It requires no training data",
                "It works only for image data",
              ],
              answer: 1,
              explain:
                "Random Forests combine many decision trees trained on different data subsets and features — the final prediction aggregates all trees, reducing overfitting.",
            },
            {
              q: "What is the F1-Score?",
              options: [
                "The percentage of training samples used",
                "The harmonic mean of Precision and Recall — balances both in imbalanced datasets",
                "The ratio of correct to incorrect predictions",
                "The learning rate of the model",
              ],
              answer: 1,
              explain:
                "F1-Score is the harmonic mean of Precision and Recall — it's the preferred metric for imbalanced classification problems where accuracy can be misleading.",
            },
            {
              q: "What is a real-world application of supervised learning in banking?",
              options: [
                "Recommending music playlists",
                "Fraud Detection — trained on labeled historical transaction data to identify fraud patterns",
                "Grouping customers without any labels",
                "Designing bank branch layouts",
              ],
              answer: 1,
              explain:
                "Fraud Detection in banking utilizes supervised learning — models are trained on labeled datasets of legitimate and fraudulent transactions to predict fraud.",
            },
          ],
          links: [
            "machine-learning",
            "unsupervised-learning",
            "reinforcement-learning",
            "ai-models",
          ],
        },
        {
          id: "unsupervised-learning",
          url: "topic-unsupervised-learning.html",
          icon: "🔍",
          name: "Unsupervised Learning",
          shortName: "Unsupervised Learning",
          source:
            "https://www.geeksforgeeks.org/machine-learning/unsupervised-learning/",
          summary:
            "Unsupervised Learning works with unlabeled data to discover hidden patterns, clusters, or associations. Key techniques include K-Means Clustering, PCA (dimensionality reduction), and Association Rule Mining.",
          sections: [
            {
              icon: "🔓",
              title: "What is Unsupervised Learning?",
              body: `Unsupervised Learning works with <strong>unlabeled data</strong> — no predefined outputs. The algorithm discovers hidden patterns, groupings, or associations independently. Valuable when: labeling data is expensive, data structure is unknown, or exploring data for insights.`,
            },
            {
              icon: "🗂️",
              title: "Three Main Categories",
              body: `<strong>Clustering</strong> — groups similar data points (K-Means, DBSCAN, Hierarchical Clustering). <strong>Dimensionality Reduction</strong> — reduces features while retaining key information (PCA, t-SNE, UMAP, Autoencoders). <strong>Association Rule Mining</strong> — finds patterns between items (Apriori algorithm — market basket analysis: "customers who buy bread also buy butter").`,
              concepts: [
                {
                  term: "K-Means Clustering",
                  def: "Partitions data into k clusters by minimizing the distance between points and their cluster centroid.",
                },
                {
                  term: "DBSCAN",
                  def: "Density-Based Spatial Clustering — groups densely packed points and labels sparse outliers as noise.",
                },
                {
                  term: "PCA (Principal Component Analysis)",
                  def: "Reduces data dimensions by projecting onto components capturing maximum variance.",
                },
                {
                  term: "Autoencoder",
                  def: "Neural network that compresses data into a latent representation and reconstructs it — used for anomaly detection and generation.",
                },
                {
                  term: "Association Rule Mining",
                  def: "Finds frequent item co-occurrence patterns in transaction data (Apriori algorithm).",
                },
              ],
            },
            {
              icon: "🛒",
              title: "Real-World Applications",
              body: `Powers: <strong>Customer Segmentation</strong> — cluster customers by purchasing behavior. <strong>Anomaly Detection</strong> — identify unusual patterns (fraud, network intrusions). <strong>Recommendation Systems</strong> — collaborative filtering groups users with similar preferences. <strong>Data Visualization</strong> — t-SNE/UMAP compress high-dimensional data to 2D/3D. <strong>Document Clustering</strong> — group news articles by topic.`,
            },
          ],
          subtopics: [
            {
              icon: "📍",
              name: "K-Means Clustering — Step by Step",
              badge: "Algorithm Detail",
              content: `K-Means process: 1. Choose k (number of clusters). 2. Initialize k random centroids. 3. Assign each point to its nearest centroid. 4. Recalculate centroids as the mean of assigned points. 5. Repeat until convergence. Choosing k: use the <strong>Elbow Method</strong> — plot inertia vs. k; find where adding clusters gives diminishing returns. K-Means assumes spherical clusters — use DBSCAN for non-convex shapes.`,
            },
            {
              icon: "📉",
              name: "PCA — Principal Component Analysis",
              badge: "Dimensionality Reduction",
              content: `PCA reduces features while preserving maximum variance: 1. Standardize data. 2. Compute covariance matrix. 3. Extract eigenvectors and eigenvalues. 4. Select top-k principal components. 5. Project data onto these components. Used to: speed up ML models, reduce noise, enable 2D/3D visualization, combat the curse of dimensionality.`,
            },
          ],
          flashcards: [
            {
              q: "What is Unsupervised Learning?",
              a: "ML with unlabeled data — the algorithm independently discovers hidden patterns, clusters, or associations without predefined answers.",
            },
            {
              q: "Name the three categories of Unsupervised Learning.",
              a: "1. Clustering (grouping similar data). 2. Dimensionality Reduction (simplifying features). 3. Association Rule Mining (finding item co-occurrence patterns).",
            },
            {
              q: "How does K-Means Clustering work?",
              a: "Choose k centroids, assign each point to nearest centroid, recalculate centroids from assignments, repeat until convergence.",
            },
            {
              q: "What is PCA used for?",
              a: "Reducing data dimensions while preserving maximum variance — useful for visualization, noise reduction, and speeding up downstream ML.",
            },
            {
              q: "What is the Elbow Method?",
              a: 'A method to choose k in K-Means — plot inertia vs. k and find the "elbow" point where adding clusters gives diminishing returns.',
            },
          ],
          questions: [
            {
              q: "In Unsupervised Learning, the training data is:",
              options: [
                "Always labeled with correct answers",
                "Unlabeled — the model discovers hidden patterns on its own",
                "Collected from supervised teachers",
                "Only used for image recognition",
              ],
              answer: 1,
              explain:
                "Unsupervised learning works with unlabeled data. The model identifies patterns, clusters, or associations independently without predefined outputs.",
            },
            {
              q: "Which technique groups similar data points together without predefined categories?",
              options: [
                "Linear Regression",
                "Clustering (e.g., K-Means)",
                "Logistic Regression",
                "Random Forest",
              ],
              answer: 1,
              explain:
                "Clustering algorithms like K-Means group similar data points together based on their features — without using labeled data or predefined classes.",
            },
            {
              q: "What is Dimensionality Reduction used for in unsupervised learning?",
              options: [
                "Increasing the number of model features",
                "Simplifying large datasets while retaining key information",
                "Labeling data automatically",
                "Training reinforcement learning agents",
              ],
              answer: 1,
              explain:
                "Dimensionality Reduction techniques reduce the number of features while preserving important information — useful for simplifying large, high-dimensional datasets.",
            },
            {
              q: "Customer segmentation in marketing is best handled by which unsupervised technique?",
              options: [
                "Supervised classification",
                "Clustering algorithms to group customers with similar behaviors",
                "Regression analysis",
                "Expert system rules",
              ],
              answer: 1,
              explain:
                "Businesses use clustering (unsupervised learning) to group customers with similar purchasing behaviors — enabling targeted marketing strategies.",
            },
          ],
          links: [
            "machine-learning",
            "supervised-learning",
            "reinforcement-learning",
            "ai-models",
          ],
        },
        {
          id: "reinforcement-learning",
          url: "topic-reinforcement-learning.html",
          icon: "🏆",
          name: "What is Reinforcement Learning?",
          shortName: "Reinforcement Learning",
          source:
            "https://www.geeksforgeeks.org/machine-learning/what-is-reinforcement-learning/",
          summary:
            "Reinforcement Learning trains an agent through trial and error — receiving rewards for correct actions and penalties for wrong ones — to maximize cumulative reward. It powers AlphaGo, robotics, autonomous vehicles, and modern LLM training (RLHF).",
          sections: [
            {
              icon: "🎮",
              title: "What is Reinforcement Learning?",
              body: `Reinforcement Learning (RL) is an ML paradigm where an <strong>agent</strong> learns to make decisions by interacting with an <strong>environment</strong>. At each step, the agent observes the current <strong>state</strong>, takes an <strong>action</strong>, and receives a <strong>reward</strong> (positive or negative). The goal is to maximize cumulative reward over time. RL does not require labeled data — the agent generates its own experience through trial and error.`,
            },
            {
              icon: "🏗️",
              title: "Five Core Components",
              body: `Every RL system has: <strong>Agent</strong> — the learner/decision-maker. <strong>Environment</strong> — the world it operates in. <strong>State (S)</strong> — the current situation. <strong>Action (A)</strong> — what the agent can do. <strong>Reward (R)</strong> — feedback signal. The agent aims to learn a <strong>Policy (π)</strong> — mapping from states to optimal actions that maximizes the expected cumulative reward.`,
              concepts: [
                {
                  term: "Agent",
                  def: "The decision-maker — learns from environment interactions.",
                },
                {
                  term: "Policy (π)",
                  def: "The agent's strategy — maps states to actions. Goal: find the optimal policy maximizing cumulative reward.",
                },
                {
                  term: "Reward",
                  def: "Feedback signal: +1 for good actions, -1 for bad. The agent optimizes for cumulative reward over time.",
                },
                {
                  term: "Q-Learning",
                  def: "Model-free RL algorithm that learns the value (Q-value) of each state-action pair to find the optimal policy.",
                },
                {
                  term: "Exploration vs Exploitation",
                  def: "The dilemma: try new actions to learn more (exploration) vs. use known best actions (exploitation). ε-greedy balances both.",
                },
              ],
            },
            {
              icon: "⚙️",
              title: "Key RL Algorithms",
              body: `Core algorithms: <strong>Q-Learning</strong> — learns Q(s,a) values using the Bellman equation. <strong>DQN (Deep Q-Network)</strong> — combines Q-Learning with deep neural networks. <strong>Policy Gradient Methods</strong> — directly optimize the policy. <strong>Actor-Critic (A3C, PPO)</strong> — combines value estimation with policy optimization. <strong>AlphaGo</strong> used Monte Carlo Tree Search + deep RL.`,
            },
            {
              icon: "🌍",
              title: "Real-World Applications",
              body: `RL powers: <strong>Gaming</strong> — AlphaGo (Go), OpenAI Five (Dota 2), AlphaStar (StarCraft II). <strong>Robotics</strong> — teaching robots to walk and grasp. <strong>Autonomous Vehicles</strong> — learning driving policies. <strong>Healthcare</strong> — optimizing treatment protocols. <strong>Finance</strong> — algorithmic trading. <strong>NLP/LLMs</strong> — RLHF trains ChatGPT and Claude to give helpful, harmless responses.`,
            },
          ],
          subtopics: [
            {
              icon: "📐",
              name: "Q-Learning — Step by Step",
              badge: "Algorithm Detail",
              content: `Q-Learning maintains a Q-table mapping every (state, action) pair to an expected reward. Update rule (Bellman Equation):<div class="highlight-box">Q(s,a) ← Q(s,a) + α [ r + γ·max Q(s',a') − Q(s,a) ]<br>α = learning rate | γ = discount factor | r = reward | s' = next state</div>The ε-greedy policy balances exploration (random action with probability ε) and exploitation (best known action). Deep Q-Networks replace the Q-table with a neural network for large state spaces.`,
            },
            {
              icon: "🤖",
              name: "RLHF — Reinforcement Learning from Human Feedback",
              badge: "LLM Connection",
              content: `RLHF transformed raw LLMs into helpful assistants: 1. <strong>Pre-training</strong> — LLM trained on internet-scale text. 2. <strong>Supervised Fine-Tuning (SFT)</strong> — fine-tuned on human-written ideal responses. 3. <strong>Reward Model Training</strong> — humans compare outputs; a reward model learns their preferences. 4. <strong>RL Optimization (PPO)</strong> — LLM further fine-tuned to maximize human-preferred responses. RLHF is how GPT-3 became ChatGPT — making models helpful, harmless, and honest.`,
            },
          ],
          flashcards: [
            {
              q: "What is Reinforcement Learning?",
              a: "An ML paradigm where an agent learns optimal decisions through trial and error — receiving rewards for good actions and penalties for bad ones — to maximize cumulative reward.",
            },
            {
              q: "Name the 5 core components of a Reinforcement Learning system.",
              a: "Agent, Environment, State (S), Action (A), Reward (R). The agent learns a Policy (π) mapping states to optimal actions.",
            },
            {
              q: "What is Q-Learning?",
              a: "A model-free RL algorithm that learns Q-values (expected future rewards) for every state-action pair using the Bellman equation, to find the optimal policy.",
            },
            {
              q: "What is the Exploration vs Exploitation dilemma?",
              a: "Exploration: try new actions to learn. Exploitation: use the best known action. ε-greedy policy balances both by exploring randomly with probability ε.",
            },
            {
              q: "What is RLHF and what did it enable?",
              a: "Reinforcement Learning from Human Feedback — humans rate model outputs, training a reward model. This transformed GPT-3 into ChatGPT by aligning AI with human preferences.",
            },
          ],
          questions: [
            {
              q: "Reinforcement Learning (RL) trains an agent by:",
              options: [
                "Providing labeled input-output pairs",
                "Trial and error — receiving rewards for correct actions and penalties for wrong ones",
                "Grouping unlabeled data into clusters",
                "Using fixed if-then rules",
              ],
              answer: 1,
              explain:
                "Reinforcement Learning focuses on how agents learn to make decisions through trial and error to maximize cumulative rewards from interactions with an environment.",
            },
            {
              q: "What are the five core components of a Reinforcement Learning system?",
              options: [
                "Input, Output, Model, Loss, Gradient",
                "Agent, Environment, State, Action, Reward",
                "Data, Algorithm, Training, Testing, Deployment",
                "Encoder, Decoder, Classifier, Regressor, Evaluator",
              ],
              answer: 1,
              explain:
                "RL revolves around: Agent (decision-maker), Environment (world it operates in), State (current condition), Action (possible moves), and Reward (feedback received).",
            },
            {
              q: "Which famous AI used Reinforcement Learning to master the game of Go?",
              options: ["BERT", "GPT-4", "AlphaGo", "DALL·E"],
              answer: 2,
              explain:
                "AlphaGo (by Google DeepMind) used reinforcement learning to master the complex board game Go — achieving performance beyond human world champions.",
            },
            {
              q: "What is RLHF and why is it important for LLMs?",
              options: [
                "Random Learning Hidden Features",
                "Reinforcement Learning from Human Feedback — aligns LLMs with human preferences for helpful, harmless responses",
                "Recurrent LSTM Human Framework",
                "Rapid Learning High Fidelity",
              ],
              answer: 1,
              explain:
                "RLHF (Reinforcement Learning from Human Feedback) uses human-rated outputs to train a reward model, guiding LLM optimization toward helpful, harmless, and honest responses — transforming GPT-3 into ChatGPT.",
            },
            {
              q: "The Q-learning algorithm in RL is used to:",
              options: [
                "Classify images by color",
                "Learn the best action for each state based on expected future rewards",
                "Reduce the number of model parameters",
                "Generate synthetic training data",
              ],
              answer: 1,
              explain:
                "Q-learning learns the best action for each state based on expected rewards — it is one of the most foundational algorithms in reinforcement learning.",
            },
          ],
          links: [
            "machine-learning",
            "supervised-learning",
            "unsupervised-learning",
            "generative-ai",
            "ai-models",
          ],
        },
        {
          id: "finals-reference",
          url: "topic-finals-reference.html",
          icon: "📄",
          name: "Finals Reference — Event-Driven Design for AI Agents",
          shortName: "Finals Reference",
          source: "Confluent Inc., 2025 — A Guide to Event-Driven Design for Agents and Multi-Agent Systems",
          summary: "The Finals reference document covering Event-Driven Architecture (EDA) for AI agents and multi-agent systems. Covers the evolution of AI (Predictive → Generative → Agentic), agent anatomy, EDA design patterns (Orchestrator-Worker, Hierarchical, Blackboard, Market-Based), and real-world applications. Primary guide for building AI agentic projects.",
          sections: [],
          subtopics: [],
          flashcards: [],
          questions: []
        }
      ];