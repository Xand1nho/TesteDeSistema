import test from "node:test";
import assert from "node:assert/strict";

import { aprovado } from "../index.js";
import { gerarNegativo } from "../helpers.js";

test("Deve retornar se o aluno está aprovado ou reprovado dependendo da nota", () => {
assert.deepStrictEqual(aprovado(0), "Reprovado");
assert.deepStrictEqual(aprovado(1), "Reprovado");
assert.deepStrictEqual(aprovado(2), "Reprovado");
assert.deepStrictEqual(aprovado(3), "Reprovado");
assert.deepStrictEqual(aprovado(4), "Reprovado");
assert.deepStrictEqual(aprovado(5), "Reprovado");
assert.deepStrictEqual(aprovado(6), "Reprovado");
assert.deepStrictEqual(aprovado(7), "Aprovado");
assert.deepStrictEqual(aprovado(8), "Aprovado");
assert.deepStrictEqual(aprovado(9), "Aprovado");
assert.deepStrictEqual(aprovado(10), "Aprovado");
});

test("Deve retornar uma mensagem de erro se passarmos número negativo", () => 
    assert.deepStrictEqual(aprovado(gerarNegativo()), "Me dê uma nota positiva")
);
