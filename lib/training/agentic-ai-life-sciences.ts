/**
 * Agentic AI for Life Sciences.
 *
 * Short, practical course: six sessions that take life scientists from what
 * coding agents are, through context engineering and skills, to reusable
 * research workflows. Every exercise uses real life sciences data and tasks.
 */

import type { Course, Reading } from './courses'

const r = (title: string, href: string): Reading => ({ title, href })

export const agenticAiLifeSciences: Course = {
  slug: 'agentic-ai-for-life-sciences',
  title: 'Agentic AI for Life Sciences',
  level: 'Beginner',
  audience: 'Biologists, bioinformaticians, data scientists and other life sciences researchers.',
  format: 'Six live sessions of about 60 minutes, each pairing a short explanation with a hands-on practical.',
  weeks: 6,
  unit: 'day',
  summary:
    'Learn to use agentic AI tools properly: systems that go beyond chatbots to read files, write code, run commands and carry out multi-step research tasks.',
  overview: [
    'Agentic AI is rapidly reshaping how researchers work. Coding agents such as Claude Code, GitHub Copilot and OpenCode can read your files, write and run code, and carry out multi-step research tasks. Despite the growing importance of these tools, there is little structured guidance available for researchers, and most are left to navigate the shift on their own.',
    'This course covers the full stack of agentic AI skills, from understanding the tools and structuring effective prompts to building reusable research workflows. Each day adds one layer: the agent-provider-model stack, context engineering, data analysis and skills, building and publishing an app, retrieval and rule files, and end-to-end workflows. All exercises use real life sciences data and tasks, and every session returns to the same question: when does AI help, when does it not, and how do you use it responsibly?',
  ],
  prerequisites:
    'Basic command line familiarity and one programming language (R or Python). No prior AI experience is required. Tool setup is covered on Day 1.',
  tools: ['Claude Code', 'GitHub Copilot', 'OpenCode', 'OpenRouter', 'VS Code', 'Model Context Protocol', 'GitHub CLI', 'Obsidian'],
  team: [{ role: 'Lead instructor', name: 'Md. Jubayer Hossain' }],
  objectives: [
    'Understand the agent-provider-model stack and choose the right tool for a given task.',
    'Apply context engineering to get better, more reliable outputs from AI tools.',
    'Use coding agents for data analysis, figure generation and automated presentations.',
    'Build interactive data portals from omics data and publish them to GitHub.',
    'Create reusable skills and agent configurations for repeated research tasks.',
    'Connect agents to external knowledge sources through RAG and the Model Context Protocol.',
    'Develop critical judgement about when AI helps, when it does not, and how to use it responsibly.',
  ],
  syllabus: [
    {
      title: 'Introduction to Agentic AI',
      theme: 'Theory and setup: what these tools are, how they differ from chatbots, and getting everyone working',
      topics: [
        'What LLMs are and how they work in practice',
        'The agent-provider-model stack: separating the agent, the API provider and the model',
        'Chat assistants vs coding agents vs multi-step agentic systems',
        'Capabilities, limitations and failure modes',
        'Data privacy: what stays local and what gets sent externally',
      ],
      lab: 'Set up VS Code with GitHub Copilot, Claude Code, or OpenCode with OpenRouter, then give the same first task to two tools and compare the results.',
      readings: [
        r('Building effective agents (Anthropic, 2024)', 'https://www.anthropic.com/engineering/building-effective-agents'),
        r('Claude Code overview (documentation)', 'https://docs.claude.com/en/docs/claude-code/overview'),
        r('GitHub Copilot documentation', 'https://docs.github.com/en/copilot'),
        r('OpenCode documentation', 'https://opencode.ai/docs/'),
        r('OpenRouter documentation', 'https://openrouter.ai/docs'),
      ],
      questions: [
        'Which parts of your data could you send to an external model provider, and which must stay on your machine?',
        'If two tools use the same model but give different answers, what is different between them?',
      ],
    },
    {
      title: 'Context Engineering',
      theme: 'Structuring prompts, providing context and managing the context window for better, cheaper answers',
      topics: [
        'Why vague prompts produce vague results',
        'Structuring prompts with role, task, format and constraints',
        'Plan mode: guiding the model before it starts building',
        'The context window: what fills it, what it costs, and when it causes hallucinations',
        'Model pricing comparison and strategies for managing long sessions',
      ],
      lab: 'Rewrite a vague research prompt with role, task, format and constraints, run both versions, and compare quality, token use and cost.',
      readings: [
        r('Effective context engineering for AI agents (Anthropic, 2025)', 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents'),
        r('Prompt engineering overview (Claude documentation)', 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview'),
        r('Lost in the Middle: How Language Models Use Long Contexts (2023)', 'https://arxiv.org/abs/2307.03172'),
      ],
      questions: [
        'What information did the agent need that you left out of your first prompt?',
        'At what point in a long session should you start a fresh one instead of continuing?',
      ],
    },
    {
      title: 'Data Analysis, Presentations and Skills',
      theme: 'Applying context engineering to real tasks, and skills as reusable instruction sets',
      topics: [
        'Data analysis with the Palmer Penguins dataset: plan mode, figures and export',
        'Automated journal club presentations: paper to PowerPoint in one prompt',
        'Skills: reusable instruction sets that teach the agent how to do a specific task well',
        'Comparing output with and without a skill loaded',
        'Iterative refinement: being sceptical, reviewing generated code and redirecting',
      ],
      lab: 'Analyse the Palmer Penguins data in plan mode and export publication-ready figures, then turn a paper into a journal club deck with and without a skill loaded.',
      readings: [
        r('palmerpenguins: Palmer Archipelago penguin data', 'https://allisonhorst.github.io/palmerpenguins/'),
        r('Agent Skills overview (Claude documentation)', 'https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview'),
        r('Anthropic skills repository', 'https://github.com/anthropics/skills'),
      ],
      questions: [
        'Which lines of the generated analysis code did you check, and what would you have missed without checking?',
        'What changed in the presentation when the skill was loaded, and why?',
      ],
    },
    {
      title: 'Building Workflows',
      theme: 'Using coding agents to scaffold web applications from research data and publish them to GitHub',
      topics: [
        'Scaffolding an app from a dataset with a coding agent',
        'Single-cell RNA-seq data from CZ CELLxGENE',
        'Gene search, cell-type filtering and custom visualisations',
        'Version control and publishing with the GitHub CLI',
      ],
      lab: 'Build an interactive single-cell RNA-seq viewer from CZ CELLxGENE data, extend it with gene search, cell-type filtering and a custom plot, and push it to GitHub from the command line.',
      readings: [
        r('CZ CELLxGENE Discover', 'https://cellxgene.cziscience.com/'),
        r('CZ CELLxGENE Census documentation', 'https://chanzuckerberg.github.io/cellxgene-census/'),
        r('GitHub CLI manual', 'https://cli.github.com/manual/'),
      ],
      questions: [
        'How would a colleague know that your viewer shows the data correctly?',
        'What belongs in the repository, and what should never be committed?',
      ],
    },
    {
      title: 'RAG, Skills and Agents',
      theme: 'How agents access external knowledge, and how to make their behaviour reusable and reproducible',
      topics: [
        'Retrieval Augmented Generation and the Model Context Protocol (MCP)',
        'Connecting agents to PubMed, GitHub and institutional resources',
        'Rule files (AGENTS.md, CLAUDE.md) for reproducible agent behaviour across sessions',
        'Building reusable skills: structured prompt templates with defined inputs, outputs and validation',
      ],
      lab: 'Write project rules and a skill for a research task you repeat, connect the agent to PubMed through MCP, and test the skill on a new input.',
      readings: [
        r('Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (2020)', 'https://arxiv.org/abs/2005.11401'),
        r('What is the Model Context Protocol?', 'https://modelcontextprotocol.io/'),
        r('AGENTS.md: a format for guiding coding agents', 'https://agents.md/'),
        r('Manage Claude’s memory with CLAUDE.md (documentation)', 'https://docs.claude.com/en/docs/claude-code/memory'),
      ],
      questions: [
        'An agent cites a paper for a claim the paper does not make. How would your skill catch it?',
        'What should go in a rule file, and what should stay in the prompt?',
      ],
    },
    {
      title: 'Research Workflows and Second Brain',
      theme: 'Combining skills, agents and knowledge systems into end-to-end research workflows',
      topics: [
        'Building custom agents for specific tasks: instructions, model and tool access',
        'Connecting agents to a personal knowledge base: Obsidian, structured notes and literature',
        'End-to-end workflow: from research question to output, using rules, skills and retrieval',
        'Responsible use, reproducibility, and an AI use policy for your lab',
      ],
      lab: 'Open session: apply the tools to a task from your own research with support, and draft an AI use policy for your lab.',
      readings: [
        r('Create custom subagents (Claude Code documentation)', 'https://docs.claude.com/en/docs/claude-code/sub-agents'),
        r('Obsidian Help', 'https://help.obsidian.md/'),
      ],
      questions: [
        'Which step of your workflow would you still do by hand, and why?',
        'What would your lab’s AI use policy require people to record?',
      ],
      assignment: 'Final workflow: an end-to-end agentic workflow for a task from your own research, with its rules, skill and a short write-up.',
    },
  ],
  competencies: [
    { code: 'H3', how: 'Directing agents to write, run and review R and Python code for analysis and apps.' },
    { code: 'F3', how: 'Connecting agents to CZ CELLxGENE, PubMed and GitHub through retrieval and MCP.' },
    { code: 'D3', how: 'Using agents for data analysis and figures, and checking the results they produce.' },
    { code: 'G3', how: 'Building and publishing an interactive single-cell data portal for other researchers.' },
    { code: 'K3', how: 'Producing figures and journal club presentations with agents, and reviewing them critically.' },
    { code: 'J3', how: 'Handling data privacy, reproducibility and responsible use, including a lab AI use policy.' },
    { code: 'M3', how: 'Building reusable skills and rule files that carry new practice into everyday research.' },
  ],
  assessment: [
    { item: 'Daily practicals', weight: 40, description: 'Five practicals (Days 1–5), submitted with prompts, outputs and a short note on what you checked.' },
    { item: 'Published data portal', weight: 20, description: 'The single-cell RNA-seq viewer from Day 4, pushed to a public GitHub repository.', due: 'Day 4' },
    { item: 'Final workflow', weight: 30, description: 'An end-to-end agentic workflow for a task from your own research, with rules, a skill and a short write-up.', due: 'One week after Day 6' },
    { item: 'Participation', weight: 10, description: 'Attendance, discussion and the tool comparison exercises.' },
  ],
  aiPolicyExtra: [
    'This course is about using AI agents, so agent use is expected throughout. Every submission includes the prompts, rule files and skills you used, so that the work can be traced and rerun.',
  ],
  resources: [
    { label: 'Building effective agents (Anthropic)', href: 'https://www.anthropic.com/engineering/building-effective-agents' },
    { label: 'Claude Code documentation', href: 'https://docs.claude.com/en/docs/claude-code/overview' },
    { label: 'GitHub Copilot documentation', href: 'https://docs.github.com/en/copilot' },
    { label: 'OpenCode documentation', href: 'https://opencode.ai/docs/' },
    { label: 'Model Context Protocol documentation', href: 'https://modelcontextprotocol.io/' },
    { label: 'CZ CELLxGENE Discover', href: 'https://cellxgene.cziscience.com/' },
  ],
}
