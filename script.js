const FORMSPREE_URL = "https://formspree.io/f/xoeejqld";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [
    ...parent.querySelectorAll(selector),
  ];

  // Tema
  const themeBtn = $("#themeBtn");

  if (themeBtn) {
    const savedTheme = localStorage.getItem("hotelflow-theme");

    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
    }

    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme;
      const next = current === "dark" ? "light" : "dark";

      document.documentElement.dataset.theme = next;
      localStorage.setItem("hotelflow-theme", next);
    });
  }

  // Menu movil
  const menu = $("#menu");
  const menuBtn = $("#menuBtn");

  if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("is-open");
    });

    $$("#menu a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
      });
    });
  }

  // Seleccion de plan
  $$("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const planInput = $("#plan");
      const contacto = $("#contacto");
      const nombreInput = $("#nombre");

      if (planInput) {
        planInput.value = button.dataset.plan;
      }

      if (contacto) {
        contacto.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => {
        if (nombreInput) nombreInput.focus();
      }, 500);
    });
  });

  // Prototipo interactivo
  const funciones = $("#funciones");

  if (funciones) {
    funciones.innerHTML = `
            <div class="proto">
                <div class="proto-heading">
                    <div>
                        <span class="proto-eyebrow">CONOCE HOTELFLOW</span>
                        <h2>Asi funciona tu hotel</h2>
                        <p>Administra habitaciones, reservas y limpieza desde un solo lugar.</p>
                    </div>
                    <span class="proto-live">
                        <span></span> DEMOSTRACION
                    </span>
                </div>

                <div class="proto-layout">
                    <aside class="proto-sidebar">
                        <div class="proto-brand">
                            <span class="proto-logo">H</span>
                            <div>
                                <strong>HotelFlow</strong>
                                <small>Panel del hotel</small>
                            </div>
                        </div>

                        <p class="proto-nav-title">MENU PRINCIPAL</p>

                        <button class="proto-nav active" data-screen="habitaciones">
                            <span>▦</span> Habitaciones
                        </button>

                        <button class="proto-nav" data-screen="reservas">
                            <span>▤</span> Reservas
                        </button>

                        <button class="proto-nav" data-screen="limpieza">
                            <span>✧</span> Limpieza
                        </button>

                        <div class="proto-sidebar-bottom">
                            <span class="proto-avatar">A</span>
                            <div>
                                <strong>Administrador</strong>
                                <small>Hotel de ejemplo</small>
                            </div>
                        </div>
                    </aside>

                    <div class="proto-main">
                        <div class="proto-topbar">
                            <div>
                                <span class="proto-muted">Panel de control /</span>
                                <strong id="protoBreadcrumb">Habitaciones</strong>
                            </div>
                            <span class="proto-date" id="protoDate"></span>
                        </div>

                        <div id="protoContent"></div>
                    </div>
                </div>

                <div class="proto-footer">
                    <span>HotelFlow · Prototipo interactivo</span>
                    <button type="button" id="protoReset">Restablecer demo</button>
                </div>
            </div>
        `;

    const style = document.createElement("style");

    style.textContent = `
            #funciones .proto {
                color: #18243a;
                font-family: inherit;
                margin: 35px auto;
                max-width: 1200px;
            }

            .proto * {
                box-sizing: border-box;
            }

            .proto-heading {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                margin-bottom: 24px;
                flex-wrap: wrap;
            }

            .proto-eyebrow {
                color: #b38a35;
                font-size: 11px;
                font-weight: 800;
                letter-spacing: 2px;
            }

            .proto-heading h2 {
                margin: 8px 0;
                font-size: clamp(25px, 4vw, 35px);
            }

            .proto-heading p {
                margin: 0;
                color: #68758a;
                font-size: 14px;
            }

            .proto-live {
                border: 1px solid #dce8df;
                background: #f1f8f2;
                color: #34734b;
                padding: 9px 13px;
                border-radius: 30px;
                font-size: 10px;
                font-weight: 800;
            }

            .proto-live span {
                display: inline-block;
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #42a568;
                margin-right: 6px;
            }

            .proto-layout {
                display: grid;
                grid-template-columns: 205px minmax(0, 1fr);
                background: #fff;
                border: 1px solid #e3e8f0;
                border-radius: 17px;
                overflow: hidden;
                box-shadow: 0 15px 45px #18243a12;
            }

            .proto-sidebar {
                background: #111d35;
                color: #fff;
                padding: 22px 14px;
                display: flex;
                flex-direction: column;
                min-height: 620px;
            }

            .proto-brand {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 0 5px 27px;
            }

            .proto-logo {
                display: grid;
                place-items: center;
                width: 37px;
                height: 37px;
                border-radius: 11px;
                background: #d4ad59;
                color: #111d35;
                font-size: 20px;
                font-weight: 900;
            }

            .proto-brand strong,
            .proto-sidebar-bottom strong {
                display: block;
                font-size: 13px;
            }

            .proto-brand small,
            .proto-sidebar-bottom small {
                display: block;
                color: #aebbd0;
                font-size: 10px;
                margin-top: 4px;
            }

            .proto-nav-title {
                color: #8190aa;
                font-size: 9px;
                font-weight: 800;
                letter-spacing: 1px;
                padding: 0 8px;
                margin: 0 0 10px;
            }

            .proto-nav {
                display: flex;
                align-items: center;
                gap: 11px;
                width: 100%;
                border: 0;
                border-radius: 9px;
                padding: 12px 10px;
                margin-bottom: 5px;
                color: #c2cce0;
                background: transparent;
                font: inherit;
                font-size: 12px;
                text-align: left;
                cursor: pointer;
            }

            .proto-nav span {
                font-size: 17px;
                width: 20px;
                text-align: center;
            }

            .proto-nav:hover,
            .proto-nav.active {
                color: #fff;
                background: #273651;
            }

            .proto-nav.active {
                box-shadow: inset 3px 0 #d4ad59;
            }

            .proto-sidebar-bottom {
                display: flex;
                align-items: center;
                gap: 9px;
                border-top: 1px solid #33405a;
                padding: 18px 3px 0;
                margin-top: auto;
            }

            .proto-avatar {
                display: grid;
                place-items: center;
                width: 34px;
                height: 34px;
                border-radius: 50%;
                background: #e4d5b4;
                color: #26334a;
                font-weight: 800;
            }

            .proto-main {
                min-width: 0;
                padding: 22px;
                background: #f7f9fc;
            }

            .proto-topbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
                padding-bottom: 18px;
                border-bottom: 1px solid #e5eaf1;
                margin-bottom: 22px;
                font-size: 12px;
            }

            .proto-muted {
                color: #8590a2;
                margin-right: 5px;
            }

            .proto-date {
                color: #68758a;
                font-size: 11px;
            }

            .proto-page-title {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 12px;
                flex-wrap: wrap;
                margin-bottom: 18px;
            }

            .proto-page-title h3 {
                font-size: 21px;
                margin: 0 0 6px;
                color: #18243a;
            }

            .proto-page-title p {
                color: #778398;
                font-size: 12px;
                margin: 0;
            }

            .proto-btn {
                border: 0;
                border-radius: 8px;
                padding: 10px 13px;
                background: #172640;
                color: #fff;
                font-size: 11px;
                font-weight: 700;
                cursor: pointer;
            }

            .proto-btn:hover {
                background: #293e60;
            }

            .proto-btn-gold {
                background: #d4ad59;
                color: #18243a;
            }

            .proto-btn-gold:hover {
                background: #e5c475;
            }

            .proto-stats {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 10px;
                margin-bottom: 20px;
            }

            .proto-stat {
                padding: 14px;
                background: #fff;
                border: 1px solid #e5eaf1;
                border-radius: 11px;
                min-width: 0;
            }

            .proto-stat span {
                display: block;
                color: #78859a;
                font-size: 10px;
                margin-bottom: 8px;
            }

            .proto-stat strong {
                font-size: 24px;
                color: #1c2b45;
            }

            .proto-stat small {
                display: block;
                margin-top: 5px;
                font-size: 9px;
                color: #8b96a7;
            }

            .proto-panel {
                border: 1px solid #e5eaf1;
                border-radius: 12px;
                background: #fff;
                padding: 17px;
                margin-bottom: 15px;
                min-width: 0;
            }

            .proto-panel-heading {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 15px;
            }

            .proto-panel-heading h4 {
                font-size: 13px;
                margin: 0;
            }

            .proto-panel-heading small {
                color: #8290a3;
                font-size: 10px;
            }

            .proto-floor-label {
                background: #f2f5fa;
                border-radius: 8px;
                padding: 10px 12px;
                margin: 14px 0 10px;
                display: flex;
                justify-content: space-between;
                gap: 10px;
                font-size: 11px;
                font-weight: 800;
            }

            .proto-floor-label small {
                color: #778398;
                font-weight: 500;
            }

            .proto-room-grid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 9px;
            }

            .proto-room {
                padding: 12px 9px;
                border: 1px solid #e2e8f0;
                border-radius: 10px;
                background: #fff;
                min-width: 0;
            }

            .proto-room-number {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 5px;
                font-size: 16px;
                font-weight: 800;
                margin-bottom: 7px;
            }

            .proto-room-type {
                color: #778398;
                font-size: 10px;
                margin-bottom: 9px;
            }

            .proto-room-price {
                color: #35435b;
                font-size: 10px;
                font-weight: 700;
                margin-top: 9px;
            }

            .proto-chip {
                display: inline-block;
                border-radius: 20px;
                padding: 5px 7px;
                font-size: 9px;
                font-weight: 800;
                line-height: 1.2;
            }

            .proto-chip.available {
                color: #267348;
                background: #e6f6ec;
            }

            .proto-chip.occupied {
                color: #a55b16;
                background: #fff0dc;
            }

            .proto-chip.cleaning {
                color: #6650a1;
                background: #eee9ff;
            }

            .proto-chip.maintenance {
                color: #a13d4a;
                background: #ffeaed;
            }

            .proto-filter-row {
                display: flex;
                flex-wrap: wrap;
                gap: 7px;
                margin-bottom: 15px;
            }

            .proto-filter {
                border: 1px solid #e0e6ef;
                border-radius: 20px;
                background: #fff;
                padding: 7px 11px;
                font-size: 10px;
                color: #59677d;
                cursor: pointer;
            }

            .proto-filter.active {
                color: #fff;
                background: #172640;
                border-color: #172640;
            }

            .proto-table-wrap {
                overflow-x: auto;
            }

            .proto-table {
                border-collapse: collapse;
                width: 100%;
                font-size: 11px;
                min-width: 440px;
            }

            .proto-table th {
                background: #f5f7fb;
                color: #7b8799;
                font-size: 9px;
                text-align: left;
                padding: 11px 9px;
                white-space: nowrap;
            }

            .proto-table td {
                border-bottom: 1px solid #edf0f5;
                padding: 12px 9px;
                color: #35435b;
                vertical-align: middle;
            }

            .proto-table tr:last-child td {
                border-bottom: 0;
            }

            .proto-table strong {
                color: #1c2b45;
            }

            .proto-guest {
                display: flex;
                align-items: center;
                gap: 9px;
                min-width: 145px;
            }

            .proto-guest-avatar {
                display: grid;
                place-items: center;
                width: 31px;
                height: 31px;
                border-radius: 50%;
                background: #e9edf7;
                color: #354a70;
                font-size: 11px;
                font-weight: 800;
                flex-shrink: 0;
            }

            .proto-guest small {
                display: block;
                color: #8994a5;
                font-size: 9px;
                margin-top: 3px;
            }

            .proto-clean-list {
                display: grid;
                gap: 10px;
            }

            .proto-clean-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
                border: 1px solid #e7ebf2;
                border-radius: 10px;
                padding: 12px;
                flex-wrap: wrap;
            }

            .proto-clean-info strong {
                display: block;
                font-size: 12px;
                margin-bottom: 4px;
            }

            .proto-clean-info small {
                color: #7b8799;
                font-size: 10px;
            }

            .proto-clean-actions {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
            }

            .proto-empty {
                padding: 24px 10px;
                color: #8490a3;
                font-size: 12px;
                text-align: center;
            }

            .proto-note {
                color: #7b8799;
                font-size: 10px;
                line-height: 1.6;
                margin-top: 12px;
            }

            .proto-total {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                background: #f2f5fa;
                border-radius: 9px;
                padding: 13px;
                margin-top: 13px;
            }

            .proto-total span {
                font-size: 11px;
                color: #66748a;
            }

            .proto-total strong {
                font-size: 20px;
                color: #1c2b45;
            }

            .proto-footer {
                display: flex;
                justify-content: space-between;
                gap: 10px;
                flex-wrap: wrap;
                padding: 13px 2px;
                color: #8590a2;
                font-size: 10px;
            }

            .proto-footer button {
                border: 0;
                background: transparent;
                color: #53627a;
                text-decoration: underline;
                cursor: pointer;
                font: inherit;
            }

            @media (max-width: 850px) {
                .proto-layout {
                    grid-template-columns: 1fr;
                }

                .proto-sidebar {
                    min-height: auto;
                    padding: 14px;
                }

                .proto-brand {
                    padding-bottom: 13px;
                }

                .proto-nav-title,
                .proto-sidebar-bottom {
                    display: none;
                }

                .proto-sidebar {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 5px;
                }

                .proto-brand {
                    grid-column: 1 / -1;
                }

                .proto-nav {
                    justify-content: center;
                    padding: 10px 4px;
                    font-size: 11px;
                }

                .proto-main {
                    padding: 15px;
                }

                .proto-room-grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                .proto-stats {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
            }

            @media (max-width: 420px) {
                .proto-main {
                    padding: 10px;
                }

                .proto-panel {
                    padding: 11px;
                }

                .proto-room-grid {
                    gap: 6px;
                }

                .proto-room {
                    padding: 10px 7px;
                }
            }
        `;

    document.head.appendChild(style);

    const initialRooms = [
      {
        number: "101",
        floor: 1,
        type: "Simple",
        price: 180,
        status: "Ocupada",
      },
      {
        number: "102",
        floor: 1,
        type: "Doble",
        price: 280,
        status: "Disponible",
      },
      {
        number: "103",
        floor: 1,
        type: "Doble",
        price: 280,
        status: "En limpieza",
      },
      {
        number: "104",
        floor: 1,
        type: "Simple",
        price: 180,
        status: "Ocupada",
      },

      {
        number: "201",
        floor: 2,
        type: "Matrimonial",
        price: 320,
        status: "Disponible",
      },
      {
        number: "202",
        floor: 2,
        type: "Doble",
        price: 280,
        status: "Mantenimiento",
      },
      {
        number: "203",
        floor: 2,
        type: "Matrimonial",
        price: 320,
        status: "Ocupada",
      },
      {
        number: "204",
        floor: 2,
        type: "Simple",
        price: 180,
        status: "En limpieza",
      },

      {
        number: "301",
        floor: 3,
        type: "Suite",
        price: 520,
        status: "Disponible",
      },
      { number: "302", floor: 3, type: "Suite", price: 520, status: "Ocupada" },
      {
        number: "303",
        floor: 3,
        type: "Matrimonial",
        price: 320,
        status: "En limpieza",
      },
      {
        number: "304",
        floor: 3,
        type: "Doble",
        price: 280,
        status: "Disponible",
      },
    ];

    const initialReservations = [
      {
        id: "RES-001",
        name: "Maria Fernanda Lopez",
        email: "maria.lopez@example.com",
        phone: "70000000",
        room: "102",
        people: 2,
        entry: "2026-10-25",
        exit: "2026-10-27",
        status: "Pendiente",
      },
      {
        id: "RES-002",
        name: "Carlos Andres Perez",
        email: "carlos.perez@example.com",
        phone: "71111111",
        room: "201",
        people: 2,
        entry: "2026-10-26",
        exit: "2026-10-29",
        status: "Confirmada",
      },
      {
        id: "RES-003",
        name: "Ana Sofia Morales",
        email: "ana.morales@example.com",
        phone: "72222222",
        room: "301",
        people: 2,
        entry: "2026-10-28",
        exit: "2026-10-30",
        status: "Confirmada",
      },
    ];

    let rooms = structuredClone(initialRooms);
    let reservations = structuredClone(initialReservations);
    let activeScreen = "habitaciones";
    let activeRoomFilter = "Todas";
    let activeReservationFilter = "Todas";

    const content = $("#protoContent");
    const breadcrumb = $("#protoBreadcrumb");
    const dateElement = $("#protoDate");

    dateElement.textContent = new Date().toLocaleDateString("es-BO", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const money = (amount) =>
      "Bs " +
      Number(amount).toLocaleString("es-BO", {
        maximumFractionDigits: 2,
      });

    const statusClass = (status) => {
      if (status === "Disponible") return "available";
      if (status === "Ocupada") return "occupied";
      if (status === "En limpieza") return "cleaning";
      return "maintenance";
    };

    const reservationClass = (status) =>
      status === "Confirmada" ? "available" : "occupied";

    const dateFormat = (date) => {
      if (!date) return "—";

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    };

    const nightsBetween = (entry, exit) => {
      const start = new Date(entry + "T12:00:00");
      const end = new Date(exit + "T12:00:00");
      return Math.max(1, Math.round((end - start) / 86400000));
    };

    const roomByNumber = (number) =>
      rooms.find((room) => room.number === number);

    const counts = () => ({
      total: rooms.length,
      available: rooms.filter((room) => room.status === "Disponible").length,
      occupied: rooms.filter((room) => room.status === "Ocupada").length,
      cleaning: rooms.filter((room) => room.status === "En limpieza").length,
      maintenance: rooms.filter((room) => room.status === "Mantenimiento")
        .length,
    });

    function renderStats() {
      const c = counts();

      return `
                <div class="proto-stats">
                    <div class="proto-stat">
                        <span>Total habitaciones</span>
                        <strong>${c.total}</strong>
                        <small>En los tres pisos</small>
                    </div>
                    <div class="proto-stat">
                        <span>Disponibles</span>
                        <strong>${c.available}</strong>
                        <small>Listas para recibir huéspedes</small>
                    </div>
                    <div class="proto-stat">
                        <span>Ocupadas</span>
                        <strong>${c.occupied}</strong>
                        <small>Con huéspedes alojados</small>
                    </div>
                    <div class="proto-stat">
                        <span>En limpieza</span>
                        <strong>${c.cleaning}</strong>
                        <small>Pendientes de preparar</small>
                    </div>
                </div>
            `;
    }

 
function renderRooms() {
    const floors = [1, 2, 3];

    const floorHtml = floors.map(floor => {
        const floorRooms = rooms.filter(room => room.floor === floor);

        return `
            <div class="proto-floor-label">
                <span>Piso ${floor}</span>
                <small>${floorRooms.length} habitaciones</small>
            </div>

            <div class="proto-room-grid">
                ${floorRooms.map(room => `
                    <div class="proto-room" data-room-click="${room.number}" style="cursor:pointer">
                        <div class="proto-room-number">
                            <span>${room.number}</span>
                            <span style="font-size:10px;color:#a0a9b8">
                                ${room.floor}°P
                            </span>
                        </div>

                        <div class="proto-room-type">${room.type}</div>

                        <span class="proto-chip ${statusClass(room.status)}">
                            ${room.status}
                        </span>

                        <div class="proto-room-price">
                            ${money(room.price)} / noche
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
    }).join("");

    content.innerHTML = `
        <div class="proto-page-title">
            <div>
                <h3>Habitaciones</h3>
                <p>Visualiza el estado de cada habitación por piso.</p>
            </div>

            <button type="button" class="proto-btn proto-btn-gold" id="protoShowAllRooms">
                Ver habitaciones
            </button>
        </div>

        ${renderStats()}

        <div class="proto-panel">
            <div class="proto-panel-heading">
                <div>
                    <h4>Habitaciones por piso</h4>
                    <small>Toca una habitación para cambiar su estado.</small>
                </div>
                <span class="proto-chip available">Ejemplo</span>
            </div>

            <div class="proto-filter-row">
                ${[
                    "Todas",
                    "Disponible",
                    "Ocupada",
                    "En limpieza",
                    "Mantenimiento"
                ].map(filter => `
                    <button
                        type="button"
                        class="proto-filter ${activeRoomFilter === filter ? "active" : ""}"
                        data-room-filter="${filter}">
                        ${filter}
                    </button>
                `).join("")}
            </div>

            <div id="protoRoomFloors">
                ${floorHtml}
            </div>
        </div>

        <p class="proto-note">
            Esta es una demostración. Los cambios de estado se reflejan
            en las habitaciones y en la sección Limpieza mientras la página
            permanezca abierta.
        </p>
    `;

    if (activeRoomFilter !== "Todas") {
        const matchingRooms = rooms.filter(
            room => room.status === activeRoomFilter
        );

        $("#protoRoomFloors").innerHTML = matchingRooms.length
            ? `
                <div class="proto-room-grid">
                    ${matchingRooms.map(room => `
                        <div class="proto-room"
                             data-room-click="${room.number}"
                             style="cursor:pointer">
                            <div class="proto-room-number">
                                <span>${room.number}</span>
                            </div>

                            <div class="proto-room-type">
                                Piso ${room.floor} · ${room.type}
                            </div>

                            <span class="proto-chip ${statusClass(room.status)}">
                                ${room.status}
                            </span>

                            <div class="proto-room-price">
                                ${money(room.price)} / noche
                            </div>
                        </div>
                    `).join("")}
                </div>
            `
            : `<div class="proto-empty">No hay habitaciones con este estado.</div>`;
    }

    $$("[data-room-filter]", content).forEach(button => {
        button.addEventListener("click", () => {
            activeRoomFilter = button.dataset.roomFilter;
            renderRooms();
        });
    });

    const showAll = $("#protoShowAllRooms");

    if (showAll) {
        showAll.addEventListener("click", () => {
            activeRoomFilter = "Todas";
            renderRooms();
        });
    }

    $$("[data-room-click]", content).forEach(card => {
        card.addEventListener("click", () => {
            const room = roomByNumber(card.dataset.roomClick);

            if (!room) return;

            const states = [
                "Disponible",
                "Ocupada",
                "En limpieza",
                "Mantenimiento"
            ];

            const currentIndex = states.indexOf(room.status);
            room.status = states[(currentIndex + 1) % states.length];

            renderRooms();
        });
    });
}

    function renderReservations() {
      const filtered =
        activeReservationFilter === "Todas"
          ? reservations
          : reservations.filter(
              (reservation) => reservation.status === activeReservationFilter,
            );

      content.innerHTML = `
                <div class="proto-page-title">
                    <div>
                        <h3>Reservas y huespedes</h3>
                        <p>Consulta los datos del huesped y su alojamiento.</p>
                    </div>
                    <span class="proto-chip available">${reservations.length} reservas</span>
                </div>

                <div class="proto-stats">
                    <div class="proto-stat">
                        <span>Total reservas</span>
                        <strong>${reservations.length}</strong>
                        <small>Registros de ejemplo</small>
                    </div>
                    <div class="proto-stat">
                        <span>Pendientes</span>
                        <strong>${reservations.filter((r) => r.status === "Pendiente").length}</strong>
                        <small>Por revisar</small>
                    </div>
                    <div class="proto-stat">
                        <span>Confirmadas</span>
                        <strong>${reservations.filter((r) => r.status === "Confirmada").length}</strong>
                        <small>Reservas aceptadas</small>
                    </div>
                    <div class="proto-stat">
                        <span>Habitaciones reservadas</span>
                        <strong>${reservations.length}</strong>
                        <small>En estos ejemplos</small>
                    </div>
                </div>

                <div class="proto-panel">
                    <div class="proto-panel-heading">
                        <h4>Listado de reservas</h4>
                        <small>Datos ficticios para demostracion</small>
                    </div>

                    <div class="proto-filter-row">
                        ${["Todas", "Pendiente", "Confirmada"]
                          .map(
                            (filter) => `
                            <button type="button"
                                class="proto-filter ${activeReservationFilter === filter ? "active" : ""}"
                                data-reservation-filter="${filter}">
                                ${filter}
                            </button>
                        `,
                          )
                          .join("")}
                    </div>

                    <div class="proto-table-wrap">
                        <table class="proto-table">
                            <thead>
                                <tr>
                                    <th>HUESPED</th>
                                    <th>HABITACION</th>
                                    <th>ENTRADA / SALIDA</th>
                                    <th>TOTAL</th>
                                    <th>ESTADO</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${filtered
                                  .map((reservation) => {
                                    const room = roomByNumber(reservation.room);
                                    const total = room
                                      ? room.price *
                                        nightsBetween(
                                          reservation.entry,
                                          reservation.exit,
                                        )
                                      : 0;

                                    const initials = reservation.name
                                      .split(" ")
                                      .slice(0, 2)
                                      .map((word) => word[0])
                                      .join("");

                                    return `
                                        <tr>
                                            <td>
                                                <div class="proto-guest">
                                                    <span class="proto-guest-avatar">${initials}</span>
                                                    <div>
                                                        <strong>${reservation.name}</strong>
                                                        <small>${reservation.email}</small>
                                                        <small>${reservation.phone}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <strong>${reservation.room}</strong>
                                                <small style="display:block;color:#8994a5;margin-top:4px">
                                                    ${room ? room.type : "Habitacion"}
                                                </small>
                                            </td>
                                            <td>
                                                ${dateFormat(reservation.entry)}
                                                <small style="display:block;color:#8994a5;margin-top:4px">
                                                    ${dateFormat(reservation.exit)}
                                                </small>
                                            </td>
                                            <td>
                                                <strong>${money(total)}</strong>
                                                <small style="display:block;color:#8994a5;margin-top:4px">
                                                    ${nightsBetween(reservation.entry, reservation.exit)} noches
                                                </small>
                                            </td>
                                            <td>
                                                <span class="proto-chip ${reservationClass(reservation.status)}">
                                                    ${reservation.status}
                                                </span>
                                            </td>
                                        </tr>
                                    `;
                                  })
                                  .join("")}
                            </tbody>
                        </table>
                    </div>

                    ${
                      filtered.length === 0
                        ? `<div class="proto-empty">No hay reservas en esta categoria.</div>`
                        : ""
                    }
                </div>

                <div class="proto-panel">
                    <div class="proto-panel-heading">
                        <h4>Ejemplo de ficha del huesped</h4>
                        <small>Maria Fernanda Lopez</small>
                    </div>

                    <div class="proto-guest" style="margin-bottom:16px">
                        <span class="proto-guest-avatar" style="width:45px;height:45px;font-size:15px">ML</span>
                        <div>
                            <strong>Maria Fernanda Lopez</strong>
                            <small>Huesped · Reserva RES-001</small>
                        </div>
                    </div>

                    <div class="proto-table-wrap">
                        <table class="proto-table">
                            <tbody>
                                <tr>
                                    <td><strong>Correo electronico</strong></td>
                                    <td>maria.lopez@example.com</td>
                                </tr>
                                <tr>
                                    <td><strong>Telefono</strong></td>
                                    <td>70000000</td>
                                </tr>
                                <tr>
                                    <td><strong>Habitacion</strong></td>
                                    <td>102 · Doble · Piso 1</td>
                                </tr>
                                <tr>
                                    <td><strong>Personas</strong></td>
                                    <td>2 huespedes</td>
                                </tr>
                                <tr>
                                    <td><strong>Fecha de entrada</strong></td>
                                    <td>25/10/2026</td>
                                </tr>
                                <tr>
                                    <td><strong>Fecha de salida</strong></td>
                                    <td>27/10/2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="proto-total">
                        <span>2 noches × Bs 280 por noche</span>
                        <strong>Bs 560</strong>
                    </div>
                </div>

                <p class="proto-note">
                    Los datos del huesped son ficticios. Esta demostracion no guarda
                    reservas ni envia informacion a la base de datos.
                </p>
            `;

      $$("#protoContent [data-reservation-filter]").forEach((button) => {
        button.addEventListener("click", () => {
          activeReservationFilter = button.dataset.reservationFilter;
          renderReservations();
        });
      });
    }

    function renderCleaning() {
      const pending = rooms.filter((room) => room.status === "En limpieza");

      content.innerHTML = `
                <div class="proto-page-title">
                    <div>
                        <h3>Control de limpieza</h3>
                        <p>Marca las habitaciones que ya estan limpias y listas.</p>
                    </div>
                    <span class="proto-chip cleaning">${pending.length} pendientes</span>
                </div>

                <div class="proto-stats">
                    <div class="proto-stat">
                        <span>Por limpiar</span>
                        <strong>${pending.length}</strong>
                        <small>Requieren atencion</small>
                    </div>
                    <div class="proto-stat">
                        <span>Disponibles</span>
                        <strong>${rooms.filter((room) => room.status === "Disponible").length}</strong>
                        <small>Listas para ocupar</small>
                    </div>
                    <div class="proto-stat">
                        <span>Ocupadas</span>
                        <strong>${rooms.filter((room) => room.status === "Ocupada").length}</strong>
                        <small>Con huespedes</small>
                    </div>
                    <div class="proto-stat">
                        <span>Mantenimiento</span>
                        <strong>${rooms.filter((room) => room.status === "Mantenimiento").length}</strong>
                        <small>No disponibles</small>
                    </div>
                </div>

                <div class="proto-panel">
                    <div class="proto-panel-heading">
                        <h4>Habitaciones pendientes de limpieza</h4>
                        <small>Ejemplo de trabajo del personal</small>
                    </div>

                    <div class="proto-clean-list">
                        ${
                          pending.length
                            ? pending
                                .map(
                                  (room) => `
                            <div class="proto-clean-row">
                                <div class="proto-clean-info">
                                    <strong>Habitacion ${room.number} · Piso ${room.floor}</strong>
                                    <small>${room.type} · ${money(room.price)} por noche</small>
                                </div>
                                <div class="proto-clean-actions">
                                    <span class="proto-chip cleaning">En limpieza</span>
                                    <button type="button"
                                        class="proto-btn proto-btn-gold"
                                        data-mark-clean="${room.number}">
                                        Marcar como limpia
                                    </button>
                                </div>
                            </div>
                        `,
                                )
                                .join("")
                            : `
                            <div class="proto-empty">
                                Todas las habitaciones estan listas o no requieren limpieza.
                            </div>
                        `
                        }
                    </div>
                </div>

                <div class="proto-panel">
                    <div class="proto-panel-heading">
                        <h4>Estado de las habitaciones</h4>
                        <small>Vista general</small>
                    </div>

                    <div class="proto-table-wrap">
                        <table class="proto-table">
                            <thead>
                                <tr>
                                    <th>HABITACION</th>
                                    <th>PISO</th>
                                    <th>TIPO</th>
                                    <th>ESTADO</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rooms
                                  .map(
                                    (room) => `
                                    <tr>
                                        <td><strong>${room.number}</strong></td>
                                        <td>${room.floor}</td>
                                        <td>${room.type}</td>
                                        <td>
                                            <span class="proto-chip ${statusClass(room.status)}">
                                                ${room.status}
                                            </span>
                                        </td>
                                    </tr>
                                `,
                                  )
                                  .join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p class="proto-note">
                    En esta demostracion, al marcar una habitacion como limpia,
                    su estado cambia a Disponible y tambien se actualiza en Habitaciones.
                </p>
            `;

      $$("[data-mark-clean]", content).forEach((button) => {
        button.addEventListener("click", () => {
          const number = button.dataset.markClean;
          const room = roomByNumber(number);

          if (room && room.status === "En limpieza") {
            room.status = "Disponible";
            renderCleaning();
          }
        });
      });
    }

    function renderScreen(screen) {
      activeScreen = screen;

      $$(".proto-nav").forEach((button) => {
        button.classList.toggle("active", button.dataset.screen === screen);
      });

      breadcrumb.textContent = {
        habitaciones: "Habitaciones",
        reservas: "Reservas",
        limpieza: "Limpieza",
      }[screen];

      if (screen === "habitaciones") renderRooms();
      if (screen === "reservas") renderReservations();
      if (screen === "limpieza") renderCleaning();
    }

    $$(".proto-nav").forEach((button) => {
      button.addEventListener("click", () => {
        renderScreen(button.dataset.screen);
      });
    });

    $("#protoReset").addEventListener("click", () => {
      rooms = structuredClone(initialRooms);
      reservations = structuredClone(initialReservations);
      activeRoomFilter = "Todas";
      activeReservationFilter = "Todas";
      renderScreen("habitaciones");
    });

    renderScreen("habitaciones");
  }

  // Formulario de contacto con Formspree
  const demoForm = $("#demoForm");

  if (demoForm) {
    demoForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nombre = $("#nombre");
      const hotel = $("#hotel");
      const email = $("#email");
      const perfil = $("#perfil");
      const necesidad = $("#necesidad");
      const interes = $("#interes");
      const plan = $("#plan");
      const submitBtn = $("#submitBtn");
      const formOk = $("#formOk");

      const nombreErr = $("#nombreErr");
      const hotelErr = $("#hotelErr");
      const emailErr = $("#emailErr");

      if (nombreErr) nombreErr.textContent = "";
      if (hotelErr) hotelErr.textContent = "";
      if (emailErr) emailErr.textContent = "";
      if (formOk) formOk.textContent = "";

      let valid = true;

      if (!nombre || !nombre.value.trim()) {
        if (nombreErr) nombreErr.textContent = "Ingresa tu nombre.";
        valid = false;
      }

      if (!hotel || !hotel.value.trim()) {
        if (hotelErr) hotelErr.textContent = "Ingresa el nombre de tu hotel.";
        valid = false;
      }

      if (
        !email ||
        !email.value.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
      ) {
        if (emailErr) emailErr.textContent = "Ingresa un correo valido.";
        valid = false;
      }

      if (!valid) return;

      const data = {
        nombre: nombre.value.trim(),
        hotel: hotel.value.trim(),
        correo: email.value.trim(),
        perfil: perfil ? perfil.value : "",
        necesidad: necesidad ? necesidad.value : "",
        interes: interes ? interes.value : "",
        plan: plan ? plan.value : "",
        origen: "Landing HotelFlow",
      };

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Enviando...";
        }

        const response = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("No se pudo enviar el formulario.");
        }

        if (formOk) {
          formOk.textContent =
            "¡Gracias! Tu informacion se envio correctamente.";
        }

        demoForm.reset();
      } catch (error) {
        if (formOk) {
          formOk.textContent =
            "No se pudo enviar. Verifica tu conexion e intenta nuevamente.";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Enviar solicitud";
        }
      }
    });
  }

  // Anio del pie de pagina
  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
