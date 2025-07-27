
import { Job } from '../types.ts';

export const allJobs: Job[] = [
    {
        id: 'bioinformatics-intern-01',
        title: 'Bioinformatics Research Intern (Demo)',
        location: 'Dhaka, Bangladesh',
        department: 'Research & Development',
        type: 'Internship',
        summary: 'An exciting opportunity for a current student to gain hands-on experience in a fast-paced bioinformatics research environment.',
        responsibilities: [
            'Assist senior scientists with data analysis tasks for ongoing research projects.',
            'Run and maintain established bioinformatics pipelines.',
            'Perform literature reviews and summarize findings.',
            'Contribute to the preparation of reports and presentations.'
        ],
        qualifications: [
            'Currently enrolled in a Bachelor\'s, Master\'s, or PhD program in Bioinformatics, Biology, Computer Science, or a related field.',
            'Basic understanding of molecular biology and genomics.',
            'Some experience with a programming language, preferably Python or R.',
            'Eagerness to learn and a strong sense of curiosity.'
        ],
        preferredQualifications: [
            'Experience with command-line tools.',
            'Previous research experience is a plus.'
        ],
        whatWeOffer: [
            'Paid internship with flexible hours.',
            'Direct mentorship from experienced scientists.',
            'Hands-on experience with real-world research projects.',
            'Opportunity to build a professional network.'
        ]
    }
];