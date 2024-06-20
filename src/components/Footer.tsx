import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { ModeToggle } from "./ThemeSwitch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <section className="mx-auto flex max-w-4xl flex-row items-center justify-evenly p-4 font-bold">
        {/* GitHub */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://github.com/remilebeau"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-5xl hover:opacity-80" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Visit My GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Email */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="mailto:remilebeau90@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="text-5xl hover:opacity-80" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send Me an Email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Resume */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="/wes-s-resume.pdf" download>
                <FiFileText className="text-5xl hover:opacity-80" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download My Resume</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ModeToggle />
      </section>
    </footer>
  );
}
