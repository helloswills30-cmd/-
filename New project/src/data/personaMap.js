import CEHS from "../assets/personas/CEHS.png";
import EISL from "../assets/personas/EISL.png";
import ESFP from "../assets/personas/ESFP.png";
import ESHC from "../assets/personas/ESHC.png";
import ESIN from "../assets/personas/ESIN.png";
import ISCP from "../assets/personas/ISCP.png";
import ISEC from "../assets/personas/ISEC.png";
import ISHC from "../assets/personas/ISHC.png";
import ISPC from "../assets/personas/ISPC.png";
import LSCE from "../assets/personas/LSCE.png";
import LSPC from "../assets/personas/LSPC.png";
import MECP from "../assets/personas/MECP.png";
import MEPC from "../assets/personas/MEPC.png";
import MSCS from "../assets/personas/MSCS.png";
import NEPC from "../assets/personas/NEPC.png";
import SCSP from "../assets/personas/SCSP.png";
import SCTM from "../assets/personas/SCTM.png";
import SEHC from "../assets/personas/SEHC.png";
import SICL from "../assets/personas/SICL.png";
import SICN from "../assets/personas/SICN.png";
import SILN from "../assets/personas/SILN.png";
import SIPR from "../assets/personas/SIPR.png";

export const personaImageMap = {
  CEHS,
  EISL,
  ESFP,
  ESHC,
  ESIN,
  ISCP,
  ISEC,
  ISHC,
  ISPC,
  LSCE,
  LSPC,
  MECP,
  MEPC,
  MSCS,
  NEPC,
  SCSP,
  SCTM,
  SEHC,
  SICL,
  SICN,
  SILN,
  SIPR,
};

export const personaMap = {
  CEHS: {
    code: "CEHS",
    name: "CEHS 人格",
    desc: "后端返回 CEHS 时展示的对应 IP 形象。",
    image: CEHS,
  },
  EISL: {
    code: "EISL",
    name: "EISL 人格",
    desc: "后端返回 EISL 时展示的对应 IP 形象。",
    image: EISL,
  },
  ESFP: {
    code: "ESFP",
    name: "ESFP 人格",
    desc: "后端返回 ESFP 时展示的对应 IP 形象。",
    image: ESFP,
  },
  ESHC: {
    code: "ESHC",
    name: "ESHC 人格",
    desc: "后端返回 ESHC 时展示的对应 IP 形象。",
    image: ESHC,
  },
  ESIN: {
    code: "ESIN",
    name: "ESIN 人格",
    desc: "后端返回 ESIN 时展示的对应 IP 形象。",
    image: ESIN,
  },
  ISCP: {
    code: "ISCP",
    name: "ISCP 人格",
    desc: "后端返回 ISCP 时展示的对应 IP 形象。",
    image: ISCP,
  },
  ISEC: {
    code: "ISEC",
    name: "ISEC 人格",
    desc: "后端返回 ISEC 时展示的对应 IP 形象。",
    image: ISEC,
  },
  ISHC: {
    code: "ISHC",
    name: "ISHC 人格",
    desc: "后端返回 ISHC 时展示的对应 IP 形象。",
    image: ISHC,
  },
  ISPC: {
    code: "ISPC",
    name: "ISPC 人格",
    desc: "后端返回 ISPC 时展示的对应 IP 形象。",
    image: ISPC,
  },
  LSCE: {
    code: "LSCE",
    name: "LSCE 人格",
    desc: "后端返回 LSCE 时展示的对应 IP 形象。",
    image: LSCE,
  },
  LSPC: {
    code: "LSPC",
    name: "LSPC 人格",
    desc: "后端返回 LSPC 时展示的对应 IP 形象。",
    image: LSPC,
  },
  MECP: {
    code: "MECP",
    name: "MECP 人格",
    desc: "后端返回 MECP 时展示的对应 IP 形象。",
    image: MECP,
  },
  MEPC: {
    code: "MEPC",
    name: "MEPC 人格",
    desc: "后端返回 MEPC 时展示的对应 IP 形象。",
    image: MEPC,
  },
  MSCS: {
    code: "MSCS",
    name: "MSCS 人格",
    desc: "后端返回 MSCS 时展示的对应 IP 形象。",
    image: MSCS,
  },
  NEPC: {
    code: "NEPC",
    name: "NEPC 人格",
    desc: "后端返回 NEPC 时展示的对应 IP 形象。",
    image: NEPC,
  },
  SCSP: {
    code: "SCSP",
    name: "SCSP 人格",
    desc: "后端返回 SCSP 时展示的对应 IP 形象。",
    image: SCSP,
  },
  SCTM: {
    code: "SCTM",
    name: "SCTM 人格",
    desc: "后端返回 SCTM 时展示的对应 IP 形象。",
    image: SCTM,
  },
  SEHC: {
    code: "SEHC",
    name: "SEHC 人格",
    desc: "后端返回 SEHC 时展示的对应 IP 形象。",
    image: SEHC,
  },
  SICL: {
    code: "SICL",
    name: "SICL 人格",
    desc: "后端返回 SICL 时展示的对应 IP 形象。",
    image: SICL,
  },
  SICN: {
    code: "SICN",
    name: "SICN 人格",
    desc: "后端返回 SICN 时展示的对应 IP 形象。",
    image: SICN,
  },
  SILN: {
    code: "SILN",
    name: "SILN 人格",
    desc: "后端返回 SILN 时展示的对应 IP 形象。",
    image: SILN,
  },
  SIPR: {
    code: "SIPR",
    name: "SIPR 人格",
    desc: "后端返回 SIPR 时展示的对应 IP 形象。",
    image: SIPR,
  },
};

export const personaOptions = Object.values(personaMap);

export function getPersona(personaCode) {
  if (!personaCode) return null;
  return personaMap[String(personaCode).trim().toUpperCase()] ?? null;
}
