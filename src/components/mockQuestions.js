const mockQuestions = [
  {
    id: 340,
    question: "Who developed WordPress?",
    description: null,
    answers: {
      answer_a:
        "WordPress was co-founded by Allen Mullenweg and Luke Little on the 27th of June 2003.",
      answer_b:
        "WordPress was co-founded by Matt Mullenweg and Mike Little on the 27th of May 2003.",
      answer_c:
        "WordPress was co-founded by Andrew Mclean and Mike Hathaway on the 24th of May 2003.",
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "WordPress" }],
    category: "CMS",
    difficulty: "Easy",
  },
  {
    id: 136,
    question: "How can you make a bulleted list?",
    description: null,
    answers: {
      answer_a: "<ol>",
      answer_b: "<dl>",
      answer_c: "<ul>",
      answer_d: "<list>",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_c",
    explanation: null,
    tip: null,
    tags: [{ name: "HTML" }],
    category: "",
    difficulty: "Easy",
  },
  {
    id: 314,
    question: "What websites can you build with WordPress?",
    description: null,
    answers: {
      answer_a: "Shop",
      answer_b: "Blog",
      answer_c: "Betting website",
      answer_d: "All of the mentioned",
      answer_e: "A Learning platform",
      answer_f: "News website",
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "WordPress" }],
    category: "CMS",
    difficulty: "Easy",
  },
  {
    id: 270,
    question: "What is a WordPress taxonomy?",
    description: null,
    answers: {
      answer_a:
        "In WordPress, a \u201ctaxonomy\u201d is a grouping mechanism for some posts (or links or custom post types).",
      answer_b:
        "In WordPress, a \u201ctaxonomy\u201d is a grouping mechanism for some plugins .",
      answer_c:
        "In WordPress, a \u201ctaxonomy\u201d is a grouping mechanism for some pages .",
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "WordPress" }],
    category: "CMS",
    difficulty: "Medium",
  },
  {
    id: 35,
    question: "The /etc/shadow file in Linux is used to store:",
    description: null,
    answers: {
      answer_a: "filesystem information",
      answer_b: "various password information",
      answer_c: "root user shell",
      answer_d: "command aliases",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_b",
    explanation: null,
    tip: null,
    tags: [{ name: "Linux" }],
    category: "Linux",
    difficulty: "Medium",
  },
  {
    id: 646,
    question: "How do we create command aliases in a shell?",
    description: null,
    answers: {
      answer_a: 'alias Aliasname="Command whose alias is to be created"',
      answer_b: 'set alias Aliasname="Command whose alias is to be created"',
      answer_c: "We can't create aliases directly in shell",
      answer_d: 'configure Aliasname="Command whose alias is to be created"',
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "BASH" }],
    category: "Linux",
    difficulty: "Easy",
  },
  {
    id: 1064,
    question:
      "Which artisan command would you use to create a new Laravel Model?",
    description: null,
    answers: {
      answer_a: "php artisan create:model ModelName",
      answer_b: "php artisan model:make ModelName",
      answer_c: "php artisan model create ModelName",
      answer_d: "php artisan make:model ModelName",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "Laravel" }],
    category: "Code",
    difficulty: "Easy",
  },
  {
    id: 683,
    question: "Expand UFS in context of file system?",
    description: null,
    answers: {
      answer_a: "UNIX File system.",
      answer_b: "Linux File System.",
      answer_c: "Plain File System.",
      answer_d: "Linux Failing System.",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "BASH" }, { name: "Linux" }],
    category: "Linux",
    difficulty: "Medium",
  },
  {
    id: 923,
    question: "What is ETCD?",
    description: null,
    answers: {
      answer_a:
        "Etcd is written in Go programming language and is a distributed key-value store used for coordinating between distributed work.",
      answer_b:
        "Etcd is written in Python programming language and is a distributed key-value store used for coordinating between distributed work.",
      answer_c:
        "Etcd is written in C++ programming language and is a distributed key-value store used for coordinating between distributed work.",
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "Kubernetes" }],
    category: "DevOps",
    difficulty: "Easy",
  },
  {
    id: 482,
    question: "How can you create an E-mail link?",
    description: null,
    answers: {
      answer_a: '<a Href="a@b">',
      answer_b: '<mail Href="a@b">',
      answer_c: '<a Href="mailto:a@b.com">',
      answer_d: "<mail>a@b</mail>",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "HTML" }],
    category: "Code",
    difficulty: "Medium",
  },
];

module.exports = mockQuestions;
