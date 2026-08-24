const form = document.getElementById("form-quadratica");
const resultadoEl = document.getElementById("resultado");
const canvas = document.getElementById("canvas-grafico");
const ctx = canvas.getContext("2d");

/**
 * Resolve uma função quadrática f(x) = ax² + bx + c,
 * retornando delta, vértice, raízes e concavidade.
 */
function calcularQuadratica(a, b, c) {
  if (a === 0) {
    throw new Error("O coeficiente 'a' não pode ser zero (a função deixaria de ser quadrática).");
  }

  const delta = b * b - 4 * a * c;
  const xVertice = -b / (2 * a);
  const yVertice = a * xVertice * xVertice + b * xVertice + c;

  let raizes = [];
  if (delta > 0) {
    const raizDelta = Math.sqrt(delta);
    raizes = [(-b + raizDelta) / (2 * a), (-b - raizDelta) / (2 * a)];
  } else if (delta === 0) {
    raizes = [-b / (2 * a)];
  }

  return { delta, xVertice, yVertice, raizes, concavidade: a > 0 ? "para cima" : "para baixo" };
}

function formatarNumero(n) {
  return Number(n.toFixed(2));
}

function desenharGrafico(a, b, c, dados) {
  const { largura, altura } = { largura: canvas.width, altura: canvas.height };
  ctx.clearRect(0, 0, largura, altura);

  const xMin = -10, xMax = 10;
  const amostras = [];
  for (let x = xMin; x <= xMax; x += 0.25) {
    amostras.push({ x, y: a * x * x + b * x + c });
  }

  let yMin = Math.min(dados.yVertice, ...amostras.map(p => p.y));
  let yMax = Math.max(dados.yVertice, ...amostras.map(p => p.y));
  const folga = (yMax - yMin) * 0.15 || 1;
  yMin -= folga;
  yMax += folga;

  const escalaX = largura / (xMax - xMin);
  const escalaY = altura / (yMax - yMin);

  function paraCanvas(x, y) {
    return {
      cx: (x - xMin) * escalaX,
      cy: altura - (y - yMin) * escalaY,
    };
  }

  // eixos
  ctx.strokeStyle = "rgba(245, 243, 231, 0.5)";
  ctx.lineWidth = 1;
  const eixoX = paraCanvas(0, 0);
  const eixoY = paraCanvas(0, 0);
  ctx.beginPath();
  ctx.moveTo(0, eixoX.cy);
  ctx.lineTo(largura, eixoX.cy);
  ctx.moveTo(eixoY.cx, 0);
  ctx.lineTo(eixoY.cx, altura);
  ctx.stroke();

  // curva
  ctx.strokeStyle = "#6ec6ca";
  ctx.lineWidth = 3;
  ctx.beginPath();
  amostras.forEach((p, i) => {
    const { cx, cy } = paraCanvas(p.x, p.y);
    if (i === 0) ctx.moveTo(cx, cy);
    else ctx.lineTo(cx, cy);
  });
  ctx.stroke();

  // vértice
  const vertice = paraCanvas(dados.xVertice, dados.yVertice);
  ctx.fillStyle = "#f2c744";
  ctx.beginPath();
  ctx.arc(vertice.cx, vertice.cy, 5, 0, Math.PI * 2);
  ctx.fill();

  // raízes
  ctx.fillStyle = "#f5f3e7";
  dados.raizes.forEach((raiz) => {
    const p = paraCanvas(raiz, 0);
    ctx.beginPath();
    ctx.arc(p.cx, p.cy, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function mostrarResultado(a, b, c) {
  try {
    const dados = calcularQuadratica(a, b, c);

    const textoRaizes =
      dados.raizes.length === 2
        ? `x' = ${formatarNumero(dados.raizes[0])}, x'' = ${formatarNumero(dados.raizes[1])}`
        : dados.raizes.length === 1
        ? `x = ${formatarNumero(dados.raizes[0])} (raiz dupla)`
        : "não possui raízes reais";

    resultadoEl.innerHTML = `
      <div><strong>Δ (delta):</strong> ${formatarNumero(dados.delta)}</div>
      <div><strong>Raízes:</strong> ${textoRaizes}</div>
      <div><strong>Vértice:</strong> (${formatarNumero(dados.xVertice)}, ${formatarNumero(dados.yVertice)})</div>
      <div><strong>Concavidade:</strong> ${dados.concavidade}</div>
    `;

    desenharGrafico(a, b, c, dados);
  } catch (erro) {
    resultadoEl.innerHTML = `<strong>Erro:</strong> ${erro.message}`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const a = parseFloat(document.getElementById("input-a").value);
  const b = parseFloat(document.getElementById("input-b").value);
  const c = parseFloat(document.getElementById("input-c").value);
  mostrarResultado(a, b, c);
});

// calcula o exemplo padrão já ao carregar a página
mostrarResultado(1, -2, -3);
