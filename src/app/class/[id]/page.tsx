'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

interface ClassContent {
    id: string
    title: string
    description: string
    subject: string
    longDescription: string
    videoUrl?: string
    pdfUrl?: string
    sections: Section[]
}

interface Section {
    id: string
    title: string
    content: string
    videos?: string[]
    pdfUrl?: string
    projectUrl?: string
    codeSnippet?: string
}

// Sample class data with detailed content
const classesData: Record<string, ClassContent> = {
    'cst-300': {
        id: 'cst-300',
        title: 'CST 300 - Major ProSeminar',
        description: 'Students learn professional writing, presentation, research, and critical-thinking skills within the diversified fields of computer science and communication design.',
        subject: 'Seminar',
        longDescription: 'Students learn professional writing, presentation, research, and critical-thinking skills within the diversified fields of computer science and communication design. This class also helps students identify and articulate personal, professional, and social goals while further practicing their problem-solving, collaboration, and community-building skills. Students will demonstrate competence in writing skills at the upper division level.',
        sections: [
            {
                id: 'projects-video-1',
                title: 'Final Video Project ',
                content: '',
                videos: ['https://www.youtube.com/embed/Ps1hElV-MJs'],
            },
            {
                id: 'projects-video-2',
                title: '',
                content: '',
                videos: ['https://www.youtube.com/embed/ocg25-n4EtM'],
            },
            {
                id: 'ethics-essay-pdf',
                title: 'Ethics Argument Essay',
                content: 'Download the complete Ethics Argument Essay materials below.',
                pdfUrl: '/pdfs/Ethics-Argument-Essay.pdf',
            },
        ],
    },
    'cst-338': {
        id: 'cst-338',
        title: 'CST 338 - Software Design',
        description: 'An intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming.',
        subject: 'Software Engineering',
        longDescription: 'This is an intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming. Coverage includes software development life cycle models, requirements analysis, and graphical user interface development.',
        sections: [
            {
                id: 'group-project',
                title: 'Group Project: Pill Hub',
                content: 'Pill Hub is a mobile application designed to help users manage their medications effectively. It offers a user-friendly interface and supports features like tracking prescriptions and managing user profiles. The app is built to be scalable, maintainable, and reliable, with key functionalities demonstrated by the development team.\n\nKey Features:\n\n• User Login and Signup: Users can log in or sign up directly from the landing page. New users are added to the database upon signup after confirming their passwords. The app provides error messages for invalid inputs, such as duplicate usernames or password mismatches.\n\n• Admin Panel: Admins can manage users, including adding new users, promoting/demoting users to/from admin roles, and deleting users. Safeguards are in place to prevent admins from deleting their own accounts.\n\n• Inventory Management: Admins can view, add, and manage drugs in the inventory. The app uses LiveData to update the drug list in real-time, ensuring changes are reflected instantly.\n\n• Prescription Management: Users can view their prescriptions, including details like drug name, quantity, and number of refills. Admins can add prescriptions, which are visible to relevant users.\n\n• Persistence and Reliability: The app uses a Room database with three tables: users, drugs, and prescriptions. Data persists even after the app is force-closed, ensuring user sessions are maintained. Comprehensive unit tests validate the core functionalities of the app, including user and prescription operations.\n\n• Technical Details: The app employs RecyclerView to display dynamic lists, such as prescriptions. Intent factories are used to streamline navigation between activities. Modularized components enhance maintainability and facilitate future updates.\n\n• GitHub Collaboration: The project is managed using a public GitHub repository with multiple branches for team members. Over 35 GitHub issues were addressed, with pull requests reviewed and merged collaboratively.\n\n• Testing: Unit tests were implemented for key components like users, drugs, and prescriptions, covering insert, update, and delete operations. All tests successfully passed, demonstrating the app\'s robustness.',
                videos: ['https://www.youtube.com/embed/xIz3Psvicts'],
            },
        ],
    },
    'cst-363': {
        id: 'cst-363',
        title: 'CST 363 - Database Management',
        description: 'This course provides balanced coverage of database use and design, focusing on relational databases.',
        subject: 'Database',
        longDescription: 'This course provides balanced coverage of database use and design, focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically, and perform database administration. Students will gain a working knowledge of the algorithms and data structures used in query evaluation and transaction processing. Students will also learn to apply newer database technologies such as XML, NoSQL, and Hadoop.',
        sections: [
            {
                id: 'projects',
                title: 'Projects',
                content: 'Database management course projects covering relational database design, SQL queries, and database administration tasks.',
                pdfUrl: '/pdfs/cst-363-projects.pdf',
            },
        ],
    },
    'cst-334': {
        id: 'cst-334',
        title: 'CST 334 - Operating Systems',
        description: 'Students will learn about the use and design of modern operating systems, focusing on Linux.',
        subject: 'Operating Systems',
        longDescription: 'Students in this course will learn about the use and design of modern operating systems, focusing on Linux. On the "use" side, students will learn the Linux command line, to write shell scripts, and to build programs with GNU utilities like awk, sed, and make. On the "design" side, students will develop a deep understanding of process management, memory management, file systems, and concurrency, and how they apply to modern technologies like virtualization and cloud computing.',
        sections: [
            {
                id: 'research-collab-project',
                title: 'Group Project: Research Collaboration Exploration',
                content: 'This group project examined national undergraduate research alliances, focusing on Access, the National Science Foundation (NSF), and the Universities Space Research Association (USRA), to highlight their research and professional opportunities for students.\n\nThe project showcased how these organizations provide hands-on experiences, mentorship, and research opportunities, fostering innovation and preparing students for future careers in STEM fields. It also highlighted the importance of collaboration between academia and national research institutions to advance education and exploration.',
                videos: ['https://www.youtube.com/embed/93KtbAT6_Tg'],
            },
        ],
    },
    'cst-311': {
        id: 'cst-311',
        title: 'CST 311 - Introduction to Computer Networking',
        description: 'A survey of telecommunications and data communications technology fundamentals, network architecture, and protocols.',
        subject: 'Networking',
        longDescription: 'Survey of Telecomm and Data Comm Technology Fundamentals, Local Area Network, Wide Area Network, Internet and internetworking protocols including TCP/IP, network security and performance, emerging industry trends such as voice over the network and high speed networking. Designed as a foundation for students who wish to pursue more advanced network studies including certificate programs. Includes hands-on networking labs that incorporate Cisco CCNA lab components.',
        sections: [
            {
                id: 'networking-intro-video',
                title: 'Introduction to Networking',
                content: '',
                videos: ['https://www.youtube.com/embed/mJZii8Bhs98'],
            },
        ],
    },
    'cst-336': {
        id: 'CST-336',
        title: 'CST 336 - Internet Programming',
        description: 'A hands-on course in dynamic web application development, covering server-side programming, database connectivity, client-side scripting, REST APIs, and responsive design.',
        subject: 'Web Development',
        longDescription: 'Provides students with dynamic web application development skills, focusing on the integration of server-side programming, database connectivity, and client-side scripting. Coverage includes the Internet architecture, responsive design, RESTful web services, and Web APIs.',
        sections: [
            {
                id: 'portfolio-website',
                title: 'Portfolio Website',
                content: 'A personal portfolio website built as part of the course, showcasing web development skills including HTML, CSS, and responsive design.',
                projectUrl: 'https://sariak.xyz/Lab1/index.html',
            },
            {
                id: 'web-assignments',
                title: 'Web Development Labs & Assignments',
                content: 'A collection of web development assignments and labs completed throughout the course, demonstrating progression in full-stack web development concepts.',
                projectUrl: 'https://sariak.xyz/',
            },
            {
                id: 'final-project',
                title: 'Final Project – Culinary Otter',
                content: 'A full-stack web application developed as the course final project. Culinary Otter is a recipe and culinary discovery platform built using server-side programming, database integration, and modern web design principles.',
                projectUrl: 'https://culinaryotter.garygigabytes.com/index',
            },
        ],
    },
    'cst-370': {
        id: 'cst-370',
        title: 'CST 370 - Algorithms',
        description: 'A study of fundamental algorithm design techniques and essential data structures for solving complex computing problems efficiently.',
        subject: 'Algorithms',
        longDescription: 'Students learn important data structures in computer science and acquire fundamental algorithm design techniques to get efficient solutions to several computing problems from various disciplines. Topics include the analysis of algorithm efficiency, hash, heap, graph, tree, sorting and searching, brute force, divide-and-conquer, decrease-and-conquer, transform-and-conquer, dynamic programming, and greedy programming.',
        sections: [
            {
                id: 'floyd-warshall',
                title: 'Floyd-Warshall Algorithm',
                content: 'Implements the Floyd-Warshall algorithm to compute and display the shortest path distances between all pairs of vertices in a weighted graph.',
                codeSnippet: `/*
 * Abstract: The program implements the Floyd-Warshall
 * algorithm to compute and display the shortest path
 * distances between all pairs.
 * Name: Saria Kabbour
 * Date: 02/25/2025
 */
import java.util.Scanner;
class Main
{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // Read vertices count
        int n = scan.nextInt();
        // Initialize the matrix
        int[][] matrix = new int[n][n];
        // Read the input matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = scan.nextInt();
                if (matrix[i][j] == -1) {
                    matrix[i][j] = Integer.MAX_VALUE / 2; // Avoid overflow in addition
                }
            }
        }
        // Floyd Warshall algorithm
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (matrix[i][k] != Integer.MAX_VALUE / 2 &&
                        matrix[k][j] != Integer.MAX_VALUE / 2 &&
                        matrix[i][j] > matrix[i][k] + matrix[k][j]) {
                        matrix[i][j] = matrix[i][k] + matrix[k][j];
                    }
                }
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (j > 0) System.out.print(" ");
                if (matrix[i][j] == Integer.MAX_VALUE / 2) {
                    System.out.print(-1);
                } else {
                    System.out.print(matrix[i][j]);
                }
            }
            System.out.println();
        }
        scan.close();
    }
}`,
            },
        ],
    },
    'cst-462s': {
        id: 'cst-462s',
        title: 'CST 462S - Race, Gender, Class in the Digital World',
        description: 'An exploration of race, gender, class, and social justice in relation to technology, combining critical reflection with community-based service learning.',
        subject: 'Social Justice',
        longDescription: 'Provides students with key knowledge of race, gender, class and social justice especially in relation to technology in today\'s digital world. Students challenge the barriers of expertise, gender, race, class, and location that restrict wider access to and understanding of the production and usage of new technologies. Students engage in practical community experience via service placements, providing depth and context for considering questions of justice, equality, social responsibilities, and the complexities of technology and its societal impact.',
        sections: [
            {
                id: 'research-paper',
                title: 'Research Paper',
                content: 'A research paper exploring the intersections of race, gender, class, and technology, examining social justice issues in the digital world.',
                pdfUrl: '/pdfs/Research-Paper.pdf',
            },
        ],
    },
    'cst-328': {
        id: 'cst-328',
        title: 'CST 328 - Digital Art and Design',
        description: 'A survey of technology, design, and aesthetic principles as they apply to twenty-first century visual media and digital creativity.',
        subject: 'Digital Art',
        longDescription: 'A survey course that combines the study of technology, design and aesthetic principles as they apply to twenty-first century visual media. Students learn how fundamental concepts of art and design apply to a broad range of commercial, expressive and entertainment forms. Students also study the democratization of the creative process through digital media, using current technology to produce sophisticated and expressive examples of personal digital creativity.',
        sections: [
            {
                id: 'digital-art-project',
                title: 'Digital Art Project',
                content: '',
                videos: ['https://www.youtube.com/embed/0ZKqlTGii-w?si=fP-R7UKJKKYnEGFo'],
            },
        ],
    },
    'cst-383': {
        id: 'cst-383',
        title: 'CST 383 - Introduction to Data Science',
        description: 'A practical introduction to data science, covering data preprocessing, machine learning, and visualization using modern statistical programming tools.',
        subject: 'Data Science',
        longDescription: 'In data science, data analysis and machine learning techniques are applied to visualize data, understand trends, and make predictions. Students learn how to obtain data, preprocess it, apply machine learning methods, and visualize the results. A student who completes the course will have enough theoretical knowledge, and enough skill with modern statistical programming languages and their libraries, to define and perform complete data science projects.',
        sections: [
            {
                id: 'churn-prediction',
                title: 'Online Machine Learning – Churn Prediction',
                content: 'A machine learning notebook built in Google Colab to predict customer churn in the telecommunications industry. The project applies two classification algorithms — Logistic Regression and K-Nearest Neighbors (KNN) — to a dataset of ~7,000 customers. The workflow covers full preprocessing (encoding categorical variables, scaling numeric features, train/test split), cross-validation, hyperparameter tuning via GridSearchCV, and model evaluation. Both models outperformed the baseline accuracy of 0.737, with Logistic Regression achieving the best test accuracy of 0.802.',
                pdfUrl: '/pdfs/Online_machine_learning_ipynb_-_Colab.pdf',
            },
        ],
    },
    'cst-438': {
        id: 'cst-438',
        title: 'CST 438 - Software Engineering',
        description: 'Prepares students for large-scale software development using software engineering principles, covering the full lifecycle from requirements and design to testing and project management.',
        subject: 'Software Engineering',
        longDescription: 'Prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.',
        sections: [
            {
                id: 'srs',
                title: 'Software Requirements Specification',
                content: 'A formal Software Requirements Specification (SRS) document produced as part of a team software project, outlining functional and non-functional requirements, system design, and project scope.',
                pdfUrl: '/pdfs/Software-Requirements-Specification.pdf',
            },
        ],
    },
    'cst-329': {
        id: 'cst-329',
        title: 'CST 329 - Reasoning with Logic',
        description: 'A study of logical reasoning and formal proof techniques as foundations for rigorous thinking in computer science.',
        subject: 'Logic',
        longDescription: 'Prepares students to use logic as a tool for precise reasoning in computer science. Coverage includes propositional and predicate logic, formal proof techniques, logical equivalences, and their applications to software correctness, algorithms, and system design.',
        sections: [],
    },
    'cst-489': {
        id: 'cst-489',
        title: 'CST 489 - Capstone Project Planning',
        description: 'Students design a detailed proposal for a professional-level capstone project, developing industry-ready skills in project planning, collaboration, and technical writing.',
        subject: 'Capstone',
        longDescription: 'Students create a detailed proposal of a substantial, professional level project with the approval of the student\'s capstone advisor. Students learn and practice project planning, collaboration, and writing skills required in the industry.',
        sections: [],
    },
    'intro-web-dev': {
        id: 'intro-web-dev',
        title: 'Introduction to Web Development',
        description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
        subject: 'Web Development',
        longDescription: 'This comprehensive course covers the foundations of web development. You\'ll learn to create responsive, interactive websites and understand how the web works.',
        sections: [],
    },
    'advanced-react': {
        id: 'advanced-react',
        title: 'Advanced React',
        description: 'Master advanced React concepts including hooks, context, and state management.',
        subject: 'React',
        longDescription: 'Dive deep into advanced React patterns and best practices. Learn to build scalable, performant applications.',
        sections: [],
    },
    'data-structures': {
        id: 'data-structures',
        title: 'Data Structures & Algorithms',
        description: 'Deep dive into essential data structures and algorithms.',
        subject: 'Computer Science',
        longDescription: 'Essential knowledge for every programmer. Learn how to solve problems efficiently with optimal data structures and algorithms.',
        sections: [],
    },
    'fullstack-development': {
        id: 'fullstack-development',
        title: 'Full Stack Development',
        description: 'Build complete web applications from frontend to backend.',
        subject: 'Full Stack',
        longDescription: 'Learn to build complete web applications using modern technologies and best practices.',
        sections: [],
    },
}

export default function ClassPage() {
    const params = useParams()
    const classId = params.id as string
    const classData = classesData[classId]

    if (!classData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-100 mb-4">Class Not Found</h1>
                    <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-lg">
                        ← Back to home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header Navigation */}
            <nav className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <Link href="/" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Classes
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                        {classData.subject}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-100">
                        {classData.title}
                    </h1>

                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        {classData.longDescription}
                    </p>
                </div>
            </section>

            {/* Video Player */}
            {classData.videoUrl && (
                <section className="pb-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-slate-100">Course Video</h2>
                        <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={classData.videoUrl}
                                title="Course Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Resources Section */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {classData.pdfUrl && (
                            <a
                                href={classData.pdfUrl}
                                download
                                className="flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800 transition group"
                            >
                                <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2a2 2 0 012-2h6a2 2 0 012 2v1h2a2 2 0 012 2v3h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V10a2 2 0 012-2h1V5a2 2 0 012-2h2V2z" />
                                </svg>
                                <div>
                                    <div className="font-semibold text-slate-100">Course Materials</div>
                                    <div className="text-sm text-slate-400">Download PDF</div>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Course Sections */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {classData.sections.map((section) => (
                            <div key={section.id} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/30 transition">
                                <h3 className="text-xl font-bold text-slate-100 mb-3">{section.title}</h3>

                                {/* Embedded Videos */}
                                {section.videos && section.videos.length > 0 && (
                                    <div className="space-y-4 mb-4">
                                        {section.videos.map((videoUrl, idx) => (
                                            <div key={idx}>
                                                {section.videos!.length > 1 && (
                                                    <p className="text-slate-400 text-sm mb-2 font-semibold">Video {idx + 1}</p>
                                                )}
                                                <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                                                    <iframe
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        src={videoUrl}
                                                        title={`${section.title} - Video ${section.videos!.length > 1 ? idx + 1 : ''}`}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <p className="text-slate-300 mb-4 whitespace-pre-wrap leading-relaxed">{section.content}</p>

                                {section.pdfUrl && (
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={section.pdfUrl}
                                            download
                                            className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded hover:bg-blue-500/20 transition text-sm font-semibold"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                            </svg>
                                            Download PDF
                                        </a>
                                    </div>
                                )}

                                {section.projectUrl && (
                                    <a
                                        href={section.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold underline"
                                    >
                                        View Project →
                                    </a>
                                )}

                                {section.codeSnippet && (
                                    <div className="mt-4">
                                        <pre className="bg-slate-900 border border-slate-700/50 rounded-lg p-4 overflow-x-auto text-sm text-slate-300 font-mono leading-relaxed">
                                            <code>{section.codeSnippet}</code>
                                        </pre>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-700/50 py-8 px-6">
                <div className="max-w-6xl mx-auto text-center text-slate-400">
                    <img src="/logo.svg" alt="CSUMB Logo" className="h-18 mx-auto mb-4 opacity-70" />
                    <p>&copy; 2024 My Classes. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
