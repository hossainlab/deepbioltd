/**
 * Computational Biology with AI Agents.
 *
 * Hands-on course: learners build, evaluate and govern LLM agents that call
 * biological databases, run analyses and read the literature. Every reading
 * link was checked to resolve to the named paper, repository or document.
 */

import type { Course, Reading } from './courses'

const HANDBOOK = 'https://lifesciencesaihandbook.com'

const r = (title: string, href: string): Reading => ({ title, href })

export const agenticAiCompBio: Course = {
  slug: 'computational-biology-with-ai-agents',
  title: 'Computational Biology with AI Agents',
  level: 'Advanced',
  weeks: 8,
  summary:
    'Build, evaluate and govern LLM agents that query biological databases, run analyses and read the literature, with a person in control of every consequential step.',
  overview: [
    'Large language models can now call tools, write and run code, and plan multi-step work. In computational biology that means agents that search NCBI and UniProt, run BLAST, analyse a count table or draft an experiment plan. This course teaches learners to build those agents and, just as important, to tell when an agent’s output can be trusted.',
    'Each week pairs a short lecture and readings with a lab that adds one capability to a working agent: tool calling, biological database tools, the Model Context Protocol, literature retrieval, sandboxed code execution and multi-agent planning. The last weeks cover evaluation against benchmarks and scripted baselines, provenance logging, information hazards and the human sign-off gates an agentic workflow needs.',
  ],
  prerequisites:
    'Working Python experience, and familiarity with common bioinformatics databases. Some machine learning background helps but is not required. Exercises need access to an LLM API; setup is covered in Week 1.',
  // 4:3 crop of course_img/Single-cell foundation models.jpeg
  thumb: '/course_img/computational-biology-card.jpeg',
  tools: ['Python', 'LLM APIs with tool calling', 'Model Context Protocol', 'LangGraph', 'Biopython', 'NCBI E-utilities', 'UniProt API', 'Docker'],
  objectives: [
    'Explain how tool-calling language models become agents, and when a fixed workflow is the better design.',
    'Wrap biological databases and analysis tools as reliable agent tools with clear schemas, error handling and rate limits.',
    'Expose data and tools to agents through the Model Context Protocol.',
    'Build literature and analysis agents whose claims trace back to cited sources and logged code.',
    'Design multi-agent systems for planning and critique, and judge when they add value over a single agent.',
    'Evaluate agents on held-out tasks against scripted baselines, reporting accuracy, cost and failure modes.',
    'Apply provenance, data-privacy, information-hazard and human-approval controls to agentic research workflows.',
  ],
  syllabus: [
    {
      title: 'From Language Models to Agents',
      theme: 'Tool calling, the agent loop, and when not to build an agent',
      topics: ['LLMs and tool calling', 'Reason–act loops', 'Workflows versus agents', 'Cost, latency and logging'],
      lab: 'Set up an API environment and build a tool-calling agent that looks up a protein in UniProt.',
      readings: [
        r('Building effective agents (Anthropic, 2024)', 'https://www.anthropic.com/engineering/building-effective-agents'),
        r('ReAct: Synergizing Reasoning and Acting in Language Models (2022)', 'https://arxiv.org/abs/2210.03629'),
        r('Tool use with Claude (documentation)', 'https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview'),
      ],
      questions: [
        'Which tasks in your own work need an agent, and which would a fixed script do better?',
        'What should an agent log so that someone else can see exactly what it did?',
      ],
    },
    {
      title: 'Biological Tools for Agents',
      theme: 'Turning databases and analysis services into reliable tools',
      topics: ['NCBI E-utilities', 'UniProt REST API', 'EMBL-EBI Job Dispatcher (BLAST)', 'Tool schemas, errors and rate limits'],
      lab: 'Give the agent sequence search and annotation tools, and have it identify and annotate an unknown sequence.',
      readings: [
        r('Augmenting large language models with chemistry tools (Nature Machine Intelligence, 2024)', 'https://doi.org/10.1038/s42256-024-00832-8'),
        r('Toolformer: Language Models Can Teach Themselves to Use Tools (2023)', 'https://arxiv.org/abs/2302.04761'),
        r('Entrez Programming Utilities Help (NCBI)', 'https://www.ncbi.nlm.nih.gov/books/NBK25501/'),
        r('UniProt programmatic access', 'https://www.uniprot.org/help/api'),
      ],
      questions: [
        'How should a tool report an error so that the agent recovers instead of guessing?',
        'Which database calls are safe to retry, and which should never run twice?',
      ],
    },
    {
      title: 'The Model Context Protocol',
      theme: 'Standard interfaces between agents, data and tools',
      topics: ['MCP servers and clients', 'Resources, tools and prompts', 'Exposing a local dataset', 'Permissions and scopes'],
      lab: 'Build an MCP server that exposes a lab dataset and two analysis functions, and connect an agent to it.',
      readings: [
        r('What is the Model Context Protocol?', 'https://modelcontextprotocol.io/'),
        r('Model Context Protocol reference servers', 'https://github.com/modelcontextprotocol/servers'),
      ],
      questions: [
        'What should an MCP server for patient-derived data refuse to expose?',
        'Who owns a tool’s behaviour once many agents can call it?',
      ],
    },
    {
      title: 'Literature Agents',
      theme: 'Retrieval, citation and verification',
      topics: ['Retrieval-augmented generation', 'Citation grounding', 'Detecting unsupported claims', 'Knowledge cut-offs and preprints'],
      lab: 'Build a literature agent that answers a research question with citations, then audit every citation by hand.',
      readings: [
        r('PaperQA: retrieval-augmented answers from scientific documents', 'https://github.com/Future-House/paper-qa'),
        r('Biomedical Knowledge Graphs and Literature AI (Life Sciences AI Handbook)', `${HANDBOOK}/foundations/knowledge-and-literature.html`),
      ],
      questions: [
        'A literature agent cites a real paper for a claim the paper does not make. How would you catch it at scale?',
        'When is a confident answer with citations worse than no answer?',
      ],
    },
    {
      title: 'Analysis Agents That Run Code',
      theme: 'Sandboxed execution and reproducible analyses',
      topics: ['Code-writing agents', 'Sandboxes and containers', 'Data access controls', 'Turning a trajectory into a reproducible script'],
      lab: 'Have an agent run a differential expression analysis in a container, then export its steps as a script that reruns without the agent.',
      readings: [
        r('Biomni: a general-purpose biomedical AI agent', 'https://github.com/snap-stanford/Biomni'),
        r('Reproducibility and Open Science (Life Sciences AI Handbook)', `${HANDBOOK}/governance/reproducibility.html`),
      ],
      questions: [
        'What makes an agent-produced analysis reproducible: the prompt, the code, the model version, or all three?',
        'Which analysis decisions should an agent never make without asking?',
      ],
    },
    {
      title: 'Multi-Agent Systems and Planning',
      theme: 'Roles, critique and the limits of agent teams',
      topics: ['Planner, executor and critic roles', 'Debate and review loops', 'Orchestration with LangGraph', 'When more agents add cost, not value'],
      lab: 'Build a planner–critic pair that drafts and reviews an experiment plan, and compare it with a single agent.',
      readings: [
        r('The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies (Nature, 2025)', 'https://doi.org/10.1038/s41586-025-09442-9'),
        r('Accelerating scientific discovery with Co-Scientist (2025)', 'https://arxiv.org/abs/2502.18864'),
        r('Agentic Science Workflows (Life Sciences AI Handbook)', `${HANDBOOK}/automation/agentic-workflows.html`),
        r('Case study: Multi-Agent Biology Research', `${HANDBOOK}/appendices/case-studies.html#sec-case-multi-agent-biology`),
      ],
      questions: [
        'What evidence would show that a team of agents did better than one agent with the same budget?',
        'In the Virtual Lab, which steps did people perform or approve, and why does that matter for the claim?',
      ],
    },
    {
      title: 'Evaluating Agents',
      theme: 'Benchmarks, baselines and failure analysis',
      topics: ['Task suites and held-out tasks', 'Scripted and single-model baselines', 'Trajectory review', 'Accuracy, cost and variance across runs'],
      lab: 'Evaluate your agent on held-out tasks over repeated runs, and compare it with a scripted baseline.',
      readings: [
        r('LAB-Bench: Measuring Capabilities of Language Models for Biology Research (2024)', 'https://arxiv.org/abs/2407.10362'),
        r('BixBench: a Comprehensive Benchmark for LLM-based Agents in Computational Biology (2025)', 'https://arxiv.org/abs/2503.00096'),
        r('The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery (2024)', 'https://arxiv.org/abs/2408.06292'),
      ],
      questions: [
        'Your agent scores well on a benchmark but fails on your lab’s data. What do you check first?',
        'How many repeated runs do you need before you report an agent’s accuracy?',
      ],
      assignment: 'Evaluation report: benchmark results, baseline comparison and a failure analysis of your agent.',
    },
    {
      title: 'Safety, Governance and Capstone',
      theme: 'Human control, provenance and information hazards',
      topics: ['Human approval gates', 'Provenance and audit logs', 'Data privacy', 'Information hazards and dual use'],
      lab: 'Capstone: present an agent for a computational biology task, with its evaluation, logs and approval gates.',
      readings: [
        r('Information Hazards in Capability Research (Life Sciences AI Handbook)', `${HANDBOOK}/governance/information-hazards.html`),
        r('Case study: Agentic Research Planning Without Lab Authorisation', `${HANDBOOK}/appendices/case-studies.html#sec-case-agentic-research-planning`),
      ],
      questions: [
        'Which actions in your capstone agent require a person’s sign-off, and how is that enforced in code?',
        'What would you leave out of a public release of your agent, and why?',
      ],
      assignment: 'Capstone project and presentation.',
    },
  ],
  competencies: [
    { code: 'H3', how: 'Writing agents, tools and MCP servers in Python.' },
    { code: 'G3', how: 'Designing agent tools and interfaces that other researchers can use safely.' },
    { code: 'F3', how: 'Connecting agents to NCBI, UniProt, EMBL-EBI and other community resources correctly.' },
    { code: 'I3', how: 'Running agents and code execution in containers with controlled data access.' },
    { code: 'D3', how: 'Evaluating agents with held-out tasks, baselines and repeated runs.' },
    { code: 'J3', how: 'Applying provenance, privacy and information-hazard controls to agentic work.' },
  ],
  assessment: [
    { item: 'Weekly labs', weight: 30, description: 'Six labs, each adding a capability to your agent, submitted as code with logged runs.' },
    { item: 'Evaluation report', weight: 20, description: 'Benchmark and baseline comparison with a failure analysis (Week 7).' },
    { item: 'Capstone project', weight: 40, description: 'An agent for a computational biology task, with evaluation, provenance logs, approval gates and a short presentation (Week 8).' },
    { item: 'Participation', weight: 10, description: 'Attendance, discussion and forum contributions.' },
  ],
  aiPolicyExtra: [
    'Agents built for this course log every model call and tool action. Those logs are part of every submission, and work without them is not marked.',
  ],
  resources: [
    { label: 'Building effective agents (Anthropic)', href: 'https://www.anthropic.com/engineering/building-effective-agents' },
    { label: 'Model Context Protocol documentation', href: 'https://modelcontextprotocol.io/' },
    { label: 'LangGraph documentation', href: 'https://langchain-ai.github.io/langgraph/' },
    { label: 'Biopython tutorial and cookbook', href: 'https://biopython.org/DIST/docs/tutorial/Tutorial.html' },
    { label: 'EMBL-EBI Job Dispatcher: programmatic access', href: 'https://www.ebi.ac.uk/Tools/common/tools/help/' },
    { label: 'The Life Sciences AI Handbook', href: HANDBOOK },
  ],
}
