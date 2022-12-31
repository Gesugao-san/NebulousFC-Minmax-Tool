import { setupMissileBuilder } from "./missile-builder.js";
import { setupGunBuilder } from "./gun-builder.js";
import { setupBeamBuilder } from "./beam-builder.js";
import { refreshArmorPen } from "./armor-penetration.js";

let selectedWeapon = null;

export function getWeapon() {
    return selectedWeapon;
}

function selectWeapon(weapon) {
    selectedWeapon = weapon;
    refreshArmorPen();
    hideWeaponSelectWarnings();
    fillWeaponSelected(weapon);
}

function hideWeaponSelectWarnings() {
  const warnings = document.querySelectorAll(".weapon-select-warning");
  warnings.forEach((e) => {
    e.classList.add("hidden");
  });
}

function fillWeaponSelected(weapon) {
  const weaponSelecteds = document.querySelectorAll(".weapon-selected");
  weaponSelecteds.forEach((n) => {
    n.classList.remove("hidden");
    const name = n.querySelector(".weapon-selected-name");
    const pen = n.querySelector(".weapon-selected-penetration");
    const damage = n.querySelector(".weapon-selected-damage");

    name.textContent = weapon.name;
    pen.textContent = weapon.armorPenetration.toFixed(2);
    damage.textContent = weapon.componentDamage.toFixed(2);
  });
}

setupMissileBuilder(selectWeapon);
setupGunBuilder(selectWeapon);
setupBeamBuilder(selectWeapon);
