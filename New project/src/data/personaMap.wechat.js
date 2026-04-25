export const personaMap = {
  CEHS: {
    name: "CEHS 人格",
    desc: "后端返回 CEHS 时展示的对应 IP 形象。",
    image: "/assets/personas/CEHS.png",
  },
  EISL: {
    name: "EISL 人格",
    desc: "后端返回 EISL 时展示的对应 IP 形象。",
    image: "/assets/personas/EISL.png",
  },
  ESFP: {
    name: "ESFP 人格",
    desc: "后端返回 ESFP 时展示的对应 IP 形象。",
    image: "/assets/personas/ESFP.png",
  },
  ESHC: {
    name: "ESHC 人格",
    desc: "后端返回 ESHC 时展示的对应 IP 形象。",
    image: "/assets/personas/ESHC.png",
  },
  ESIN: {
    name: "ESIN 人格",
    desc: "后端返回 ESIN 时展示的对应 IP 形象。",
    image: "/assets/personas/ESIN.png",
  },
  ISCP: {
    name: "ISCP 人格",
    desc: "后端返回 ISCP 时展示的对应 IP 形象。",
    image: "/assets/personas/ISCP.png",
  },
  ISEC: {
    name: "ISEC 人格",
    desc: "后端返回 ISEC 时展示的对应 IP 形象。",
    image: "/assets/personas/ISEC.png",
  },
  ISHC: {
    name: "ISHC 人格",
    desc: "后端返回 ISHC 时展示的对应 IP 形象。",
    image: "/assets/personas/ISHC.png",
  },
  ISPC: {
    name: "ISPC 人格",
    desc: "后端返回 ISPC 时展示的对应 IP 形象。",
    image: "/assets/personas/ISPC.png",
  },
  LSCE: {
    name: "LSCE 人格",
    desc: "后端返回 LSCE 时展示的对应 IP 形象。",
    image: "/assets/personas/LSCE.png",
  },
  LSPC: {
    name: "LSPC 人格",
    desc: "后端返回 LSPC 时展示的对应 IP 形象。",
    image: "/assets/personas/LSPC.png",
  },
  MECP: {
    name: "MECP 人格",
    desc: "后端返回 MECP 时展示的对应 IP 形象。",
    image: "/assets/personas/MECP.png",
  },
  MEPC: {
    name: "MEPC 人格",
    desc: "后端返回 MEPC 时展示的对应 IP 形象。",
    image: "/assets/personas/MEPC.png",
  },
  MSCS: {
    name: "MSCS 人格",
    desc: "后端返回 MSCS 时展示的对应 IP 形象。",
    image: "/assets/personas/MSCS.png",
  },
  NEPC: {
    name: "NEPC 人格",
    desc: "后端返回 NEPC 时展示的对应 IP 形象。",
    image: "/assets/personas/NEPC.png",
  },
  SCSP: {
    name: "SCSP 人格",
    desc: "后端返回 SCSP 时展示的对应 IP 形象。",
    image: "/assets/personas/SCSP.png",
  },
  SCTM: {
    name: "SCTM 人格",
    desc: "后端返回 SCTM 时展示的对应 IP 形象。",
    image: "/assets/personas/SCTM.png",
  },
  SEHC: {
    name: "SEHC 人格",
    desc: "后端返回 SEHC 时展示的对应 IP 形象。",
    image: "/assets/personas/SEHC.png",
  },
  SICL: {
    name: "SICL 人格",
    desc: "后端返回 SICL 时展示的对应 IP 形象。",
    image: "/assets/personas/SICL.png",
  },
  SICN: {
    name: "SICN 人格",
    desc: "后端返回 SICN 时展示的对应 IP 形象。",
    image: "/assets/personas/SICN.png",
  },
  SILN: {
    name: "SILN 人格",
    desc: "后端返回 SILN 时展示的对应 IP 形象。",
    image: "/assets/personas/SILN.png",
  },
  SIPR: {
    name: "SIPR 人格",
    desc: "后端返回 SIPR 时展示的对应 IP 形象。",
    image: "/assets/personas/SIPR.png",
  },
};

export function getPersona(personaCode) {
  if (!personaCode) return null;
  return personaMap[String(personaCode).trim().toUpperCase()] || null;
}
