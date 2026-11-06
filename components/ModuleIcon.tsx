import {
  Activity,
  Bot,
  Cpu,
  Factory,
  ListOrdered,
  Move3d,
  Network,
  ShieldCheck,
  Spline,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Bot,
  Cpu,
  Factory,
  ListOrdered,
  Move3d,
  Network,
  ShieldCheck,
  Spline,
  Wrench,
};

export default function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Cpu;
  return <Icon className={className} />;
}
