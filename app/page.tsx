import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, FileText, ExternalLink, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Afridi Rahman Bondhon
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#publications" className="text-muted-foreground hover:text-foreground transition-colors">
              Publications
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Afridi Rahman Bondhon</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A Full Stack Software Engineer and Researcher specializing in web development and AI applications,
                respectively.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/AfridiRahmanBondhon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/afridi-rahman-bondhon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://scholar.google.com/citations?hl=en&user=6a2jTXMAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <BookOpen className="h-6 w-6" />
                  <span className="sr-only">Google Scholar</span>
                </Link>
                <Link href="mailto:msse1889@iit.du.ac.bd" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
                <Image
                  src="/images/M-255094.jpg"
                  alt="Afridi Rahman Bondhon"
                  width={400}
                  height={400}
                  className="rounded-full object-cover border-4 border-primary/20"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square max-w-[300px] mx-auto">
                  <Image
                    src="/images/IMG_0386.jpg"
                    alt="Afridi Rahman Bondhon - Graduation"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground">
                  I'm a Full Stack Software Engineer and Researcher with experience in web development and AI
                  applications. Currently pursuing my Masters in Software Engineering at the University of Dhaka, I'm
                  also working as a QA and Development Engineer on a project funded by Bangladesh Computer Council.
                </p>
                <p className="text-muted-foreground">
                  My research interests include LiDAR point cloud data segmentation, deep learning for image
                  segmentation, and road quality assessment using satellite imagery. I'm passionate about applying
                  technology to solve real-world problems and contributing to the advancement of ICT in Bangladesh.
                </p>
                <div className="pt-4">
                  <Button variant="outline" asChild>
                    <Link href="/cv/Afridi_Rahman_Bondhon_CV.pdf" download className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Experiences</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Professional Experience */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold border-b pb-2">Professional</h3>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-medium">QA and Development Engineer</h4>
                    <span className="text-sm text-muted-foreground">Mar 2025 - Present</span>
                  </div>
                  <p className="text-primary font-medium">ICT Division, Bangladesh Computer Council (BCC)</p>
                  <p className="text-muted-foreground">
                    Project: Enhancement of Bangla Language in ICT through Research and Development
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-medium">Research Assistant</h4>
                    <span className="text-sm text-muted-foreground">Jul 2024 - Present</span>
                  </div>
                  <p className="text-primary font-medium">
                    Ministry of Posts, Telecommunications and Information Technology
                  </p>
                  <p className="text-muted-foreground">
                    Project: Effective Building Boundary Extraction from Segmented LiDAR Point Cloud Data
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-medium">Full Stack Software Engineer</h4>
                    <span className="text-sm text-muted-foreground">Oct 2023 - Dec 2023</span>
                  </div>
                  <p className="text-primary font-medium">Nogor Solutions Ltd</p>
                  <p className="text-muted-foreground">
                    Worked with Laravel, Vue, Bootstrap, MySQL, and REST APIs to develop web applications.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-medium">Internship</h4>
                    <span className="text-sm text-muted-foreground">Jul 2023 - Oct 2023</span>
                  </div>
                  <p className="text-primary font-medium">Skills for Employment Investment Program (SEIP) Project</p>
                  <p className="text-muted-foreground">Training program at BASIS focused on PHP with Laravel.</p>
                </div>
              </div>

              {/* Academic Experience */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold border-b pb-2">Academic</h3>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-medium">Instructor (Python, MS Office)</h4>
                    <span className="text-sm text-muted-foreground">Oct 2024 - Present</span>
                  </div>
                  <p className="text-primary font-medium">
                    Institute of Information Technology (IIT), University of Dhaka
                  </p>
                  <p className="text-muted-foreground">
                    Teaching Python programming and Microsoft Office in training programs.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-medium">Teaching Assistant</h4>
                    <span className="text-sm text-muted-foreground">Jun 2024 - Nov 2024</span>
                  </div>
                  <p className="text-primary font-medium">University of Dhaka</p>
                  <p className="text-muted-foreground">Assisted in Government Training Program for Officials.</p>
                </div>

                <div className="space-y-8 mt-8">
                  <h3 className="text-2xl font-semibold border-b pb-2">Education</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-medium">MSc in Software Engineering</h4>
                      <span className="text-sm text-muted-foreground">Feb 2024 - Present</span>
                    </div>
                    <p className="text-primary font-medium">
                      Institute of Information Technology (IIT), University of Dhaka
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-medium">BSc in Computer Science and Engineering</h4>
                      <span className="text-sm text-muted-foreground">Jan 2019 - Jun 2023</span>
                    </div>
                    <p className="text-primary font-medium">Ahsanullah University of Science and Technology (AUST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of the key projects I've worked on throughout my career and academic journey.
              </p>
            </div>

            {/* Industrial Projects */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Industrial Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Journal Webapp */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Journal Webapp</h3>
                    <p className="text-muted-foreground">
                      A webapp enabling journal editors to create, edit, and manage journal entries through a dynamic
                      dashboard with user authentication and real-time updates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Laravel</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Vue</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Bootstrap</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PHP</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/First-Project-Nogor-Solutions-Limited-seperate-Laravel-10-API-Vue-3"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Manufacturing Management Systems */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Manufacturing Management</h3>
                    <p className="text-muted-foreground">
                      Web application for a steel and rod factory, facilitating efficient management of production,
                      inventory, and order tracking with real-time data updates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Laravel</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Vue</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Bootstrap</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">JavaScript</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Second-Project-Nogor-Solutions-Limited-Laravel-10-Vue3-"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="space-y-8 mt-12">
              <h3 className="text-2xl font-semibold">Academic Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Learning and Teaching Platform */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Learning Platform</h3>
                    <p className="text-muted-foreground">
                      SOAP-based platform with independent services for user management, content delivery, payments, and
                      notifications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">SpringBoot</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Java</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">SOAP</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Service-Oriented-Architecture-Protocol---Learning-and-Teaching-Platform---IIT-DU"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Library Management */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Library Management</h3>
                    <p className="text-muted-foreground">
                      Software that manages records of books borrowed, purchased or returned in a library with user
                      management for librarians.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">C</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">CodeBlocks</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Library-Management"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* CashMemo */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">CashMemo</h3>
                    <p className="text-muted-foreground">
                      Software that helps track business operations and manage inventory levels efficiently.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">C</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">iGraphics</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Visual Studio</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Cash-Memo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Cholojai */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Cholojai</h3>
                    <p className="text-muted-foreground">
                      Mobile application designed to provide tourists with comprehensive information about places they
                      are visiting.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Android</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Java</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Firebase</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Cholojai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Shop Management */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Shop Management</h3>
                    <p className="text-muted-foreground">
                      Management tool featuring stock level tracking and sales transaction processing for retail
                      businesses.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Java</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">MySQL</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">NetBeans</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Shop-Management"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* CarSales */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">CarSales</h3>
                    <p className="text-muted-foreground">
                      Java JFrame-based program that helps car dealerships manage inventory, sales, and customer data
                      efficiently.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Java</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">MySQL</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">NetBeans</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/CarSales"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Binimoy */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Binimoy</h3>
                    <p className="text-muted-foreground">
                      E-commerce mobile application that allows customers to purchase products or services on their
                      mobile devices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Android</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Java</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Firebase</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Binimoy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* HelpEmp */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">HelpEmp</h3>
                    <p className="text-muted-foreground">
                      Software solution for workforce management, providing tools for tracking employee information,
                      scheduling, and performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PHP</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">JavaScript</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">MySQL</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/HelpEmp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Train Ticket System */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Train Ticket System</h3>
                    <p className="text-muted-foreground">
                      System that allows different platforms to exchange data and information, enabling users to book
                      tickets from any platform.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PL/SQL</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Database</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Train-Ticket-System-PL-SQL-"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Smart Blind Stick */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Smart Blind Stick</h3>
                    <p className="text-muted-foreground">
                      Hardware tool built with Arduino Mega, ultrasonic sensors, and servo motor to help people with
                      blindness navigate safely.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Arduino</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">C++</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Hardware</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Smart-Blind-Stick-Arduino-"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Compiler */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Compiler</h3>
                    <p className="text-muted-foreground">
                      Compiler that converts C code to assembly language machine instructions and detects compilation
                      errors.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">C/C++</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">CodeBlocks</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Compiler Design</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Compiler-in-C-"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Laptop Price Prediction */}
                <div className="group border rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Laptop Price Prediction</h3>
                    <p className="text-muted-foreground">
                      Machine learning model that predicts laptop prices based on specifications, trained with different
                      ML algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Machine Learning
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Google Colab</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/AfridiRahmanBondhon/Laptop-Price-Prediction"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Research Publications</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My contributions to academic research and publications.
              </p>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link
                    href="https://scholar.google.com/citations?hl=en&user=6a2jTXMAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    View Google Scholar Profile
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Journal Papers</h3>
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium">
                  Interpretable Feature Selection for LiDAR Point Cloud Data Segmentation in Urban Area Using
                  Explainable Artificial Intelligence (XAI) Techniques
                </h4>
                <p className="text-muted-foreground mt-2">Remote Sensing (MDPI) 2025, (Under Review)</p>
              </div>
            </div>

            <div className="space-y-8 mt-8">
              <h3 className="text-2xl font-semibold">Conference Papers</h3>
              <div className="space-y-6">
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-medium">
                    Deep Learning Image Segmentation for Satellite Images of National Highways of Bangladesh
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    IGARSS 2023 - IEEE International Geoscience and Remote Sensing Symposium
                  </p>
                  <p className="text-primary mt-1">DOI: 10.1109/IGARSS52108.2023.10282693</p>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-medium">
                    Road Quality Measurement System Using Satellite Images For National Highways Of Bangladesh
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    IGARSS 2023 - IEEE International Geoscience and Remote Sensing Symposium
                  </p>
                  <p className="text-primary mt-1">DOI: 10.1109/IGARSS52108.2023.10281789</p>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-medium">
                    Dataset for Road Roughness Assessment Using Image Classification Techniques and Deep Learning
                    Models: A Case Study on Bangladeshi National Highways
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    International Conference on Big Data, IoT and Machine Learning 2023
                  </p>
                  <p className="text-primary mt-1">DOI: 10.1007/978-981-99-8937-9_19</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of the technologies and tools I work with.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Skill categories */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>HTML5 & CSS3</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Vue.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Bootstrap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Responsive Design</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>PHP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Laravel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Java</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Spring Boot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>REST APIs</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Database</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>MySQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Firebase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>PL/SQL</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Other Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Python</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Android Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>C/C++</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Git & GitHub</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements and Extra Curricular Activities Section */}
        <section id="achievements" className="py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Achievements and Extra Curricular Activities</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">ICT Fellowship Award (2024–2025)</h3>
                <p className="text-muted-foreground mt-2">
                  Received competitive fellowship from Bangladesh ICT Division supporting Masters research in ICT with
                  monthly stipend and research funding.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Journal Reviewer</h3>
                <p className="text-muted-foreground mt-2">
                  Reviewed 1 paper for the journal PLOS One since January 2025 and 1 paper (JIPD-6162) for the Journal
                  of Infrastructure, Policy and Development in 2024.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Community Service</h3>
                <p className="text-muted-foreground mt-2">
                  Active member of "Graveyard cleaning and Burying organization Jessore" - contributing to community
                  welfare and social service.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Academic Competitions and Volunteering</h3>
                <p className="text-muted-foreground mt-2">
                  Evaluator and Volunteer of National Bangladesh Artificial Intelligence Olympiad - BDAIO (2024).
                  Volunteered for text data collection in a "Bangladeshi Fake Food Review Detection" research project
                  conducted by AUST (2023).
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Sports Achievements</h3>
                <p className="text-muted-foreground mt-2">
                  Badminton semi-finalist of IIT Indoor Tournament 2024, Best Goal Keeper of Bappi Premier League
                  (October 2021), Two times Champion of Mollapara Badminton Tournament (2020), Champion of Carrom
                  Tournament M.M. College (2017), Runners-Up of JSMSC Chess Tournament (2015).
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Event Organization and Leadership</h3>
                <p className="text-muted-foreground mt-2">
                  Organized a Picnic of CSE Department consisting of 700 people (April 2022), Coordinator of "Bappi
                  Premier League" a football tournament of AUST (May 2022), Organized a Batch Tour of 56 people in Saint
                  Martin Coral Island, Bangladesh (2022), Organized a Batch Tour of 22 people in Keokradong Mountain
                  Peak, Bandarban, Bangladesh (2021), Food and Accessories management in "Computer Science and
                  Engineering Fall Fest 2021".
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests Section */}
        <section id="interests" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Personal Interests</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beyond my professional work, here are some activities I enjoy in my personal time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">🎣 Fishing with my father</h3>
                <p className="text-muted-foreground">
                  I enjoy spending quality time fishing with my father, which helps me relax and strengthen our bond
                  while connecting with nature.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">🌍 Exploring by travelling</h3>
                <p className="text-muted-foreground">
                  I love exploring new places and experiencing different cultures through travel, which broadens my
                  perspective and inspires creativity.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">💻 Knowing about new technologies</h3>
                <p className="text-muted-foreground">
                  I'm passionate about staying updated with the latest technological advancements and innovations in the
                  field of computer science and engineering.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">🎬 Watching movies in leisure</h3>
                <p className="text-muted-foreground">
                  During my free time, I enjoy watching movies as a way to unwind and appreciate different storytelling
                  techniques and cinematography.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>msse1889@iit.du.ac.bd</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <Link
                      href="https://github.com/AfridiRahmanBondhon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/AfridiRahmanBondhon
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <Link
                      href="https://linkedin.com/in/afridi-rahman-bondhon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/afridi-rahman-bondhon
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <Link
                      href="https://scholar.google.com/citations?hl=en&user=6a2jTXMAAAAJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Google Scholar Profile
                    </Link>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground">Location: Shanti Niketon, Dhaka-1212, Bangladesh</p>
                  <p className="text-muted-foreground mt-2">Phone: +880 1819 924428</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Link
              href="https://github.com/AfridiRahmanBondhon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/afridi-rahman-bondhon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://scholar.google.com/citations?hl=en&user=6a2jTXMAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="h-5 w-5" />
              <span className="sr-only">Google Scholar</span>
            </Link>
            <Link href="mailto:msse1889@iit.du.ac.bd" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Afridi Rahman Bondhon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
