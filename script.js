(() => {
  function qe(e) {
    let t = 2166136261;
    for (let o of e) ((t ^= o.charCodeAt(0)), (t = Math.imul(t, 16777619)));
    return () => (
      (t ^= t << 13),
      (t ^= t >>> 17),
      (t ^= t << 5),
      ((t >>> 0) % 1e3) / 1e3
    );
  }
  var Fe = {
    top: ["S", "M", "L", "XL", "XXL"],
    wtop: ["XS", "S", "M", "L", "XL"],
    waist: ["28", "30", "32", "34", "36"],
    wwaist: ["26", "28", "30", "32", "34"],
    shoeM: ["6", "7", "8", "9", "10"],
    shoeW: ["4", "5", "6", "7", "8"],
    kid: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    kshoe: ["10C", "11C", "12C", "13C", "1Y"],
    one: ["Free Size"],
  };
  function Ae(e, t, o) {
    let s = qe(e + t),
      a = {};
    return (
      o.forEach((r) => {
        let n = s();
        a[r] =
          n < 0.17
            ? 0
            : n < 0.34
              ? 1 + Math.floor(s() * 3)
              : 5 + Math.floor(s() * 22);
      }),
      Object.values(a).some((r) => r > 1) ||
        (a[o[Math.floor(o.length / 2)]] = 9),
      a
    );
  }
  function l(e, t, o, s, a, r, n, u) {
    let w = Fe[n];
    return {
      id: e,
      name: t,
      type: o,
      category: s,
      price: a,
      mrp: r,
      sizeKey: n,
      sizes: w,
      sizeLabel: /waist/i.test(n)
        ? "Waist (in)"
        : /shoe/i.test(n)
          ? "Shoe size (UK)"
          : n === "kid" || n === "kshoe"
            ? "Age / size"
            : "Size",
      colours: u.map(([H, Ie], De) => {
        let J = Ae(e, H, w);
        return (
          De === 0 && Object.values(J).every((Ne) => Ne === 0) && (J[w[0]] = 6),
          { name: H, hex: Ie, stock: J }
        );
      }),
    };
  }
  var Re = {
      id: "men",
      label: "Men's",
      eyebrow: "MEN'S COLLECTION",
      looks: [
        {
          id: "m-01",
          title: "Casual Streetwear",
          headline: ["WEAR", "THE EDIT."],
          tag: "Explore. Experience. Elevate.",
          model: "procedural/male",
          body: {
            type: "male",
            skin: "#c68a62",
            hair: "short",
            hairColor: "#1c1512",
            pose: "pockets",
            shades: !0,
          },
          bg: { top: "#4b4c50", bottom: "#17181a" },
          products: [
            l(
              "m-tee-01",
              "Oversized Graphic Tee",
              "tee",
              "T-Shirts",
              1299,
              1799,
              "top",
              [
                ["Off White", "#e9e6df"],
                ["Black", "#1b1b1d"],
                ["Olive", "#6b6f4a"],
              ],
            ),
            l(
              "m-cargo-01",
              "Utility Cargo Pants",
              "cargo",
              "Cargo Pants",
              2499,
              3299,
              "waist",
              [
                ["Stone", "#a79c86"],
                ["Black", "#24252a"],
                ["Olive", "#5d6244"],
              ],
            ),
            l(
              "m-snk-01",
              "Minimal Court Sneakers",
              "sneaker",
              "Footwear",
              3499,
              4499,
              "shoeM",
              [
                ["White", "#f3f3f1"],
                ["Black", "#202022"],
                ["Grey", "#9a9b9f"],
              ],
            ),
            
            // (
            //   "m-cap-01",
            //   "Washed Cotton Cap",
            //   "cap",
            //   "Accessories",
            //   699,
            //   999,
            //   "one",
            //   [
            //     ["Black", "#1d1d1f"],
            //     ["Sand", "#b9a98a"],
            //   ],
            // ),
          ],
        },
        {
          id: "m-02",
          title: "Oversized Sweatshirt & Baggy Jeans",
          headline: ["SOFT FIT.", "HARD EDGE."],
          tag: "Heavyweight comfort, relaxed lines.",
          model: "procedural/male",
          body: {
            type: "male",
            skin: "#8d5a3b",
            hair: "curly",
            hairColor: "#0f0d0c",
            pose: "pockets",
            shades: !0,
          },
          bg: { top: "#505156", bottom: "#18191b" },
          products: [
            l(
              "m-sweat-02",
              "Classic Oversized Sweatshirt",
              "sweatshirt",
              "Sweatshirts",
              1999,
              2699,
              "top",
              [
                ["Black", "#18181a"],
                ["Charcoal", "#43444a"],
                ["Cream", "#e4dfd2"],
              ],
            ),
            l(
              "m-jeans-02",
              "Baggy Washed Jeans",
              "baggy",
              "Jeans",
              2799,
              3699,
              "waist",
              [
                ["Washed Black", "#2b2c30"],
                ["Indigo", "#3b4b6b"],
                ["Light Blue", "#7f9bbb"],
              ],
            ),
            l(
              "m-snk-02",
              "Chunky Street Sneakers",
              "sneaker",
              "Footwear",
              3999,
              5299,
              "shoeM",
              [
                ["White", "#f1f1ef"],
                ["Grey", "#a3a4a8"],
              ],
            ),
          ],
        },
        {
          id: "m-03",
          title: "Shirt & Cargo Pants",
          headline: ["CLEAN", "UTILITY."],
          tag: "Structured shirting, field-ready trousers.",
          model: "procedural/male",
          body: {
            type: "male",
            skin: "#e0ac8a",
            hair: "short",
            hairColor: "#4a3220",
            pose: "relaxed",
            shades: !1,
          },
          bg: { top: "#4a4d50", bottom: "#151718" },
          products: [
            l(
              "m-shirt-03",
              "Boxy Linen Shirt",
              "shirt",
              "Shirts",
              1899,
              2499,
              "top",
              [
                ["Sky", "#9db7cf"],
                ["White", "#efeee9"],
                ["Sage", "#97a58a"],
              ],
            ),
            l(
              "m-cargo-03",
              "Relaxed Cargo Trousers",
              "cargo",
              "Cargo Pants",
              2699,
              3499,
              "waist",
              [
                ["Khaki", "#8f845f"],
                ["Charcoal", "#3a3b40"],
                ["Black", "#1d1e21"],
              ],
            ),
            l(
              "m-boot-03",
              "Suede Desert Boots",
              "boot",
              "Footwear",
              4299,
              5499,
              "shoeM",
              [
                ["Tan", "#a07a52"],
                ["Brown", "#5b3f2a"],
              ],
            ),
          ],
        },
        {
          id: "m-04",
          title: "Hoodie & Denim",
          headline: ["LAYER", "UP."],
          tag: "The everyday uniform, elevated.",
          model: "procedural/male",
          body: {
            type: "male",
            skin: "#b87b55",
            hair: "short",
            hairColor: "#17110e",
            pose: "pockets",
            shades: !1,
          },
          bg: { top: "#4d4e53", bottom: "#16171a" },
          products: [
            l(
              "m-hood-04",
              "Heavyweight Pullover Hoodie",
              "hoodie",
              "Hoodies",
              2299,
              2999,
              "top",
              [
                ["Heather Grey", "#8c8d92"],
                ["Black", "#1a1a1c"],
                ["Navy", "#222c45"],
              ],
            ),
            l(
              "m-jeans-04",
              "Straight Fit Denim",
              "jeans",
              "Jeans",
              2499,
              3299,
              "waist",
              [
                ["Mid Blue", "#4e6a8f"],
                ["Dark Indigo", "#242f47"],
                ["Black", "#26272b"],
              ],
            ),
            l(
              "m-snk-04",
              "Retro Runner Sneakers",
              "sneaker",
              "Footwear",
              3299,
              4299,
              "shoeM",
              [
                ["Cream", "#e8e2d2"],
                ["Black", "#222224"],
              ],
            ),
            // (
            //   "m-shd-04",
            //   "Square Frame Sunglasses",
            //   "shades",
            //   "Accessories",
            //   1199,
            //   1699,
            //   "one",
            //   [["Black", "#111112"]],
            // ),
          ],
        },
        {
          id: "m-05",
          title: "Premium Jacket Outfit",
          headline: ["SHARP", "EDGES."],
          tag: "Tailored outerwear for after dark.",
          model: "procedural/male",
          body: {
            type: "male",
            skin: "#d79b76",
            hair: "short",
            hairColor: "#241812",
            pose: "relaxed",
            shades: !1,
          },
          bg: { top: "#525358", bottom: "#18191c" },
          products: [
            l(
              "m-jkt-05",
              "Wool Blend Bomber Jacket",
              "jacket",
              "Jackets",
              5499,
              7299,
              "top",
              [
                ["Charcoal", "#34353b"],
                ["Olive", "#4d533b"],
                ["Black", "#17171a"],
              ],
            ),
            l(
              "m-tee-05",
              "Supima Crew Tee",
              "tee",
              "T-Shirts",
              999,
              1399,
              "top",
              [
                ["White", "#f2f1ec"],
                ["Black", "#1c1c1e"],
              ],
            ),
            l(
              "m-trs-05",
              "Pleated Tailored Trousers",
              "trousers",
              "Trousers",
              2999,
              3999,
              "waist",
              [
                ["Graphite", "#2f3036"],
                ["Stone", "#b2a994"],
              ],
            ),
            l(
              "m-boot-05",
              "Leather Chelsea Boots",
              "boot",
              "Footwear",
              5299,
              6999,
              "shoeM",
              [
                ["Black", "#161617"],
                ["Brown", "#4e3524"],
              ],
            ),
          ],
        },
        {
          id: "m-06",
          title: "Weekend Layers",
          headline: ["SLOW", "SUNDAYS."],
          tag: "Easy proportions, earthy tones.",
          model: "procedural/male",
          body: {
            type: "male",
            skin: "#a56b46",
            hair: "curly",
            hairColor: "#120e0c",
            pose: "relaxed",
            shades: !0,
          },
          bg: { top: "#4e4f53", bottom: "#17181a" },
          products: [
            l(
              "m-sweat-06",
              "Garment Dyed Sweatshirt",
              "sweatshirt",
              "Sweatshirts",
              1899,
              2499,
              "top",
              [
                ["Moss", "#5b6347"],
                ["Rust", "#8a4b33"],
                ["Bone", "#dcd6c6"],
              ],
            ),
            l(
              "m-trs-06",
              "Wide Cotton Trousers",
              "trousers",
              "Trousers",
              2299,
              2999,
              "waist",
              [
                ["Ecru", "#d6cdb7"],
                ["Black", "#202125"],
              ],
            ),
            l(
              "m-snk-06",
              "Suede Low Sneakers",
              "sneaker",
              "Footwear",
              3799,
              4999,
              "shoeM",
              [
                ["Sand", "#c8b690"],
                ["Grey", "#8e8f93"],
              ],
            ),
          ],
        },
      ],
    },
    Qe = {
      id: "women",
      label: "Women's",
      eyebrow: "WOMEN'S COLLECTION",
      looks: [
        {
          id: "w-01",
          title: "Casual Contemporary",
          headline: ["WEAR", "THE EDIT."],
          tag: "Explore. Experience. Elevate.",
          model: "procedural/female",
          body: {
            type: "female",
            skin: "#c58b66",
            hair: "long",
            hairColor: "#17100d",
            pose: "relaxed",
            shades: !0,
          },
          bg: { top: "#4c4d52", bottom: "#17181b" },
          products: [
            l(
              "w-tank-01",
              "Ribbed Crop Top",
              "crop",
              "Tops",
              1499,
              1999,
              "wtop",
              [
                ["Black", "#18181a"],
                ["White", "#f0efea"],
                ["Mocha", "#7a5a49"],
              ],
            ),
            l(
              "w-jeans-01",
              "Wide Leg Jeans",
              "widejeans",
              "Jeans",
              2499,
              3299,
              "wwaist",
              [
                ["Light Wash", "#8fa8c4"],
                ["Mid Blue", "#5b789c"],
                ["Black", "#2a2b2f"],
              ],
            ),
            l(
              "w-snk-01",
              "Classic Sneakers",
              "sneaker",
              "Footwear",
              3499,
              4599,
              "shoeW",
              [
                ["White", "#f4f4f2"],
                ["Grey", "#a0a1a5"],
                ["Pink", "#e5b7c0"],
              ],
            ),
          ],
        },
        {
          id: "w-02",
          title: "Crop Top & Wide-Leg Jeans",
          headline: ["EASY", "DENIM."],
          tag: "High rise, high impact.",
          model: "procedural/female",
          body: {
            type: "female",
            skin: "#e3b392",
            hair: "long",
            hairColor: "#3a2517",
            pose: "hip",
            shades: !1,
          },
          bg: { top: "#505156", bottom: "#18191b" },
          products: [
            l(
              "w-crop-02",
              "Cotton Baby Tee Crop",
              "crop",
              "Tops",
              1199,
              1599,
              "wtop",
              [
                ["White", "#f1f0ec"],
                ["Lilac", "#b9a9cf"],
                ["Black", "#1b1b1d"],
              ],
            ),
            l(
              "w-jeans-02",
              "High-Rise Wide Leg Jeans",
              "widejeans",
              "Jeans",
              2799,
              3699,
              "wwaist",
              [
                ["Indigo", "#3f5273"],
                ["Ice Blue", "#a9bfd6"],
                ["Ecru", "#e0d9c8"],
              ],
            ),
            l(
              "w-snk-02",
              "Platform Sneakers",
              "sneaker",
              "Footwear",
              3799,
              4999,
              "shoeW",
              [
                ["White", "#f4f4f2"],
                ["Black", "#1f1f21"],
              ],
            ),
          ],
        },
        {
          id: "w-03",
          title: "Elegant Dress",
          headline: ["EVENING", "LIGHT."],
          tag: "Fluid silhouettes in deep tones.",
          model: "procedural/female",
          body: {
            type: "female",
            skin: "#a96f4b",
            hair: "long",
            hairColor: "#0f0b0a",
            pose: "elegant",
            shades: !1,
          },
          bg: { top: "#4a4a52", bottom: "#15151a" },
          products: [
            l(
              "w-dress-03",
              "Satin Slip Midi Dress",
              "dress",
              "Dresses",
              4999,
              6499,
              "wtop",
              [
                ["Wine", "#6a1f33"],
                ["Midnight", "#1d2440"],
                ["Champagne", "#d9c3a0"],
              ],
            ),
            l(
              "w-heel-03",
              "Strappy Block Heels",
              "heel",
              "Footwear",
              3999,
              5299,
              "shoeW",
              [
                ["Black", "#18181a"],
                ["Nude", "#d1a98a"],
              ],
            ),
          ],
        },
        {
          id: "w-04",
          title: "Co-ord Set",
          headline: ["MATCHED", "MOOD."],
          tag: "Two pieces, one effortless statement.",
          model: "procedural/female",
          body: {
            type: "female",
            skin: "#d79f7b",
            hair: "long",
            hairColor: "#2b1b12",
            pose: "hip",
            shades: !1,
          },
          bg: { top: "#505256", bottom: "#17181a" },
          products: [
            l(
              "w-cotop-04",
              "Boxy Co-ord Top",
              "coordtop",
              "Co-ords",
              1799,
              2399,
              "wtop",
              [
                ["Sage", "#8f9f8a"],
                ["Sand", "#d0c1a5"],
                ["Charcoal", "#3b3c42"],
              ],
            ),
            l(
              "w-cotrs-04",
              "Co-ord Wide Trousers",
              "widetrousers",
              "Co-ords",
              2299,
              2999,
              "wwaist",
              [
                ["Sage", "#8f9f8a"],
                ["Sand", "#d0c1a5"],
                ["Charcoal", "#3b3c42"],
              ],
            ),
            l(
              "w-snk-04",
              "Slim Trainers",
              "sneaker",
              "Footwear",
              3299,
              4399,
              "shoeW",
              [
                ["White", "#f4f4f2"],
                ["Beige", "#cdbfa6"],
              ],
            ),
          ],
        },
        {
          id: "w-05",
          title: "Jacket & Trousers",
          headline: ["POWER", "DRESSING."],
          tag: "Tailoring with a modern ease.",
          model: "procedural/female",
          body: {
            type: "female",
            skin: "#bf8561",
            hair: "long",
            hairColor: "#150f0c",
            pose: "relaxed",
            shades: !1,
          },
          bg: { top: "#4f5054", bottom: "#18191c" },
          products: [
            l(
              "w-blz-05",
              "Relaxed Tailored Blazer",
              "jacket",
              "Jackets",
              4999,
              6499,
              "wtop",
              [
                ["Black", "#18181b"],
                ["Ash", "#8d8e92"],
                ["Camel", "#a98763"],
              ],
            ),
            l(
              "w-tank-05",
              "Silk Feel Tank",
              "crop",
              "Tops",
              1299,
              1799,
              "wtop",
              [
                ["Ivory", "#ece6d8"],
                ["Black", "#19191b"],
              ],
            ),
            l(
              "w-trs-05",
              "High Waist Straight Trousers",
              "trousers",
              "Trousers",
              2899,
              3799,
              "wwaist",
              [
                ["Black", "#1e1f23"],
                ["Taupe", "#8b7d6c"],
              ],
            ),
            l(
              "w-heel-05",
              "Pointed Kitten Heels",
              "heel",
              "Footwear",
              3499,
              4599,
              "shoeW",
              [
                ["Black", "#18181a"],
                ["Tan", "#b88d63"],
              ],
            ),
          ],
        },
        {
          id: "w-06",
          title: "Off-Duty Denim",
          headline: ["CITY", "FADES."],
          tag: "Washed blues, soft layers.",
          model: "procedural/female",
          body: {
            type: "female",
            skin: "#e8bd9c",
            hair: "long",
            hairColor: "#5a3a22",
            pose: "relaxed",
            shades: !0,
          },
          bg: { top: "#4d4e53", bottom: "#17181b" },
          products: [
            l("w-tee-06", "Fitted Rib Tee", "tee", "Tops", 999, 1399, "wtop", [
              ["White", "#f2f1ed"],
              ["Black", "#1b1b1d"],
            ]),
            l(
              "w-jeans-06",
              "Cargo Wide Jeans",
              "widejeans",
              "Jeans",
              2999,
              3899,
              "wwaist",
              [
                ["Faded Grey", "#8c9199"],
                ["Light Wash", "#8fa8c4"],
              ],
            ),
            l(
              "w-snk-06",
              "Retro Court Sneakers",
              "sneaker",
              "Footwear",
              3499,
              4599,
              "shoeW",
              [
                ["White", "#f4f4f2"],
                ["Green", "#7fa58b"],
              ],
            ),
          ],
        },
      ],
    },
    Ve = {
      id: "kids",
      label: "Kid's",
      eyebrow: "KID'S COLLECTION",
      looks: [
        {
          id: "k-01",
          title: "Casual Kids Outfit",
          headline: ["WEAR", "THE EDIT."],
          tag: "Explore. Experience. Elevate.",
          model: "procedural/boy",
          body: {
            type: "boy",
            skin: "#c68a62",
            hair: "curly",
            hairColor: "#1a120e",
            pose: "relaxed",
            shades: !0,
          },
          bg: { top: "#4d4e53", bottom: "#17181b" },
          products: [
            l(
              "k-tee-01",
              "Cotton Play Tee",
              "tee",
              "T-Shirts",
              699,
              999,
              "kid",
              [
                ["Blue", "#4f79b5"],
                ["Yellow", "#e0b83f"],
                ["White", "#f1f0ec"],
              ],
            ),
            l(
              "k-short-01",
              "Cargo Shorts",
              "shorts",
              "Shorts",
              899,
              1199,
              "kid",
              [
                ["Khaki", "#a49873"],
                ["Navy", "#2a3553"],
              ],
            ),
            l(
              "k-snk-01",
              "Kids Sneakers",
              "sneaker",
              "Footwear",
              1499,
              1999,
              "kshoe",
              [
                ["White", "#f3f3f1"],
                ["Navy", "#27304d"],
              ],
            ),
          ],
        },
        {
          id: "k-02",
          title: "Hoodie & Jeans",
          headline: ["LITTLE", "LEGEND."],
          tag: "Cosy layers made for play.",
          model: "procedural/boy",
          body: {
            type: "boy",
            skin: "#d9a07c",
            hair: "curly",
            hairColor: "#201510",
            pose: "pockets",
            shades: !0,
          },
          bg: { top: "#505156", bottom: "#18191c" },
          products: [
            l(
              "k-hood-02",
              "Kids Hoodie",
              "hoodie",
              "Hoodies",
              1499,
              1999,
              "kid",
              [
                ["Black", "#1b1b1d"],
                ["White", "#eeede8"],
                ["Grey", "#8a8b90"],
              ],
            ),
            l(
              "k-jeans-02",
              "Kids Cargo Jeans",
              "baggy",
              "Jeans",
              1999,
              2599,
              "kid",
              [
                ["Washed Grey", "#707279"],
                ["Blue", "#56729a"],
              ],
            ),
            l(
              "k-snk-02",
              "Kids Sneakers",
              "sneaker",
              "Footwear",
              1999,
              2599,
              "kshoe",
              [
                ["White", "#f3f3f1"],
                ["Grey", "#9a9b9f"],
              ],
            ),
          ],
        },
        {
          id: "k-03",
          title: "T-Shirt & Trousers",
          headline: ["PLAY", "GROUND."],
          tag: "Soft, durable, endlessly mixable.",
          model: "procedural/boy",
          body: {
            type: "boy",
            skin: "#8f5d3e",
            hair: "short",
            hairColor: "#0f0c0b",
            pose: "relaxed",
            shades: !1,
          },
          bg: { top: "#4b4c51", bottom: "#16171a" },
          products: [
            l(
              "k-tee-03",
              "Graphic Crew Tee",
              "tee",
              "T-Shirts",
              799,
              1099,
              "kid",
              [
                ["Green", "#5f9a6d"],
                ["Red", "#c44b45"],
                ["White", "#f1f0ec"],
              ],
            ),
            l(
              "k-trs-03",
              "Everyday Chino Trousers",
              "trousers",
              "Trousers",
              1299,
              1699,
              "kid",
              [
                ["Beige", "#c2b393"],
                ["Navy", "#2a3553"],
              ],
            ),
            l(
              "k-snk-03",
              "Velcro Trainers",
              "sneaker",
              "Footwear",
              1699,
              2199,
              "kshoe",
              [
                ["Blue", "#4f79b5"],
                ["White", "#f3f3f1"],
              ],
            ),
            l(
              "k-bag-03",
              "Mini Backpack",
              "backpack",
              "Accessories",
              999,
              1399,
              "one",
              [
                ["Navy", "#2a3553"],
                ["Red", "#c44b45"],
              ],
            ),
          ],
        },
        {
          id: "k-04",
          title: "Girls' Dress",
          headline: ["TWIRL", "WORTHY."],
          tag: "Pretty, comfy, party-ready.",
          model: "procedural/girl",
          body: {
            type: "girl",
            skin: "#d6a07c",
            hair: "long",
            hairColor: "#2a1a11",
            pose: "relaxed",
            shades: !1,
          },
          bg: { top: "#51525a", bottom: "#18181d" },
          products: [
            l(
              "k-dress-04",
              "Flared Party Dress",
              "dress",
              "Dresses",
              1999,
              2699,
              "kid",
              [
                ["Rose", "#d98ba1"],
                ["Lilac", "#a99ad0"],
                ["Mint", "#8fc9b0"],
              ],
            ),
            l(
              "k-flat-04",
              "Ballet Flats",
              "flat",
              "Footwear",
              1299,
              1699,
              "kshoe",
              [
                ["Silver", "#b9bbc2"],
                ["Pink", "#e8b3c2"],
              ],
            ),
          ],
        },
        {
          id: "k-05",
          title: "Tracksuit",
          headline: ["ON THE", "MOVE."],
          tag: "Zip-up comfort for every adventure.",
          model: "procedural/boy",
          body: {
            type: "boy",
            skin: "#b87a55",
            hair: "short",
            hairColor: "#150f0c",
            pose: "relaxed",
            shades: !1,
          },
          bg: { top: "#4f5055", bottom: "#17181b" },
          products: [
            l(
              "k-trkj-05",
              "Zip Tracksuit Jacket",
              "jacket",
              "Tracksuits",
              1799,
              2399,
              "kid",
              [
                ["Royal Blue", "#2f4f9a"],
                ["Black", "#1b1b1d"],
                ["Red", "#b8433f"],
              ],
            ),
            l(
              "k-trkp-05",
              "Tracksuit Joggers",
              "joggers",
              "Tracksuits",
              1499,
              1999,
              "kid",
              [
                ["Royal Blue", "#2f4f9a"],
                ["Black", "#1b1b1d"],
                ["Red", "#b8433f"],
              ],
            ),
            l(
              "k-snk-05",
              "Sport Trainers",
              "sneaker",
              "Footwear",
              1799,
              2399,
              "kshoe",
              [
                ["White", "#f3f3f1"],
                ["Black", "#202022"],
              ],
            ),
          ],
        },
        {
          id: "k-06",
          title: "Denim Day Out",
          headline: ["SMALL", "STEPS."],
          tag: "Tough denim, bright layers.",
          model: "procedural/girl",
          body: {
            type: "girl",
            skin: "#e2ae8b",
            hair: "long",
            hairColor: "#4a2f1d",
            pose: "relaxed",
            shades: !0,
          },
          bg: { top: "#4e4f54", bottom: "#17181b" },
          products: [
            l(
              "k-tee-06",
              "Puff Sleeve Tee",
              "tee",
              "T-Shirts",
              799,
              1099,
              "kid",
              [
                ["Yellow", "#e6c14a"],
                ["White", "#f1f0ec"],
                ["Pink", "#e8a5b8"],
              ],
            ),
            l(
              "k-jeans-06",
              "Wide Leg Kids Jeans",
              "widejeans",
              "Jeans",
              1799,
              2299,
              "kid",
              [
                ["Light Blue", "#8fa8c4"],
                ["Indigo", "#3f5273"],
              ],
            ),
            l(
              "k-snk-06",
              "Kids Sneakers",
              "sneaker",
              "Footwear",
              1699,
              2199,
              "kshoe",
              [
                ["White", "#f3f3f1"],
                ["Pink", "#e5b7c0"],
              ],
            ),
          ],
        },
      ],
    },
    m = { men: Re, women: Qe, kids: Ve },
    K = ["men", "women", "kids"];
  function U() {
    let e = [];
    return (
      K.forEach((t) =>
        m[t].looks.forEach((o, s) =>
          o.products.forEach((a) => e.push({ p: a, cid: t, look: o, li: s })),
        ),
      ),
      e
    );
  }
  var Ge = {
      men: {
        modelName: "Male model",
        note: "Same adult male model in all 6 looks",
        aspect: 0.6666666666666666,
        looks: {
          "m-01": {
            src: "images/Formal_men.png",
            srcset: "",
            hotspots: {
              "m-tee-01": { y: 38 },
              "m-cargo-01": { y: 65 },
              "m-snk-01": { y: 90 },
              "m-cap-01": { y: 19 },
            },
          },
          "m-02": {
            src: "images/Normal_casual_men.png",
            srcset: "",
            hotspots: {
              "m-sweat-02": { y: 35 },
              "m-jeans-02": { y: 65 },
              "m-snk-02": { y: 90 },
            },
          },
          "m-03": {
            src: "images/Casual_men.png",
            srcset: "",
            hotspots: {
              "m-shirt-03": { y: 36 },
              "m-cargo-03": { y: 65 },
              "m-boot-03": { y: 85 },
            },
          },
          "m-04": {
            src: "images/Casual_normal_men.png",
            srcset: "",
            hotspots: {             
              "m-hood-04": { y: 38 },
              "m-jeans-04": { y: 65 },
              "m-snk-04": { y: 88 },
              
               },
          },
          "m-05": {
            src: "images/Modern_men.png",
            srcset: "",
            hotspots: {
              "m-jkt-05": { y: 38, x: 50 },
              "m-tee-05": { y: 29 },
              "m-trs-05": { y: 65 },
              "m-boot-05": { y: 90 },
            },
          },
          "m-06": {
            src: "images/Normal_men.png",
            srcset: "",
            hotspots: {
              "m-sweat-06": { y: 35 },
              "m-trs-06": { y: 60, x: 50 },
              "m-snk-06": { y: 85 },
            },
          },
        },
      },
      women: {
        modelName: "Female model",
        note: "Same adult female model in all 6 looks",
        aspect: 0.6666666666666666,
        looks: {
          "w-01": { src: "images/women/look-01.jpg", srcset: "", hotspots: {} },
          "w-02": { src: "images/women/look-02.jpg", srcset: "", hotspots: {} },
          "w-03": { src: "images/women/look-03.jpg", srcset: "", hotspots: {} },
          "w-04": { src: "images/women/look-04.jpg", srcset: "", hotspots: {} },
          "w-05": { src: "images/women/look-05.jpg", srcset: "", hotspots: {} },
          "w-06": { src: "images/women/look-06.jpg", srcset: "", hotspots: {} },
        },
      },
      kids: {
        modelName: "Child model",
        note: "Same child model in all 6 looks",
        aspect: 0.6666666666666666,
        looks: {
          "k-01": { src: "images/kids/look-01.jpg", srcset: "", hotspots: {} },
          "k-02": { src: "images/kids/look-02.jpg", srcset: "", hotspots: {} },
          "k-03": { src: "images/kids/look-03.jpg", srcset: "", hotspots: {} },
          "k-04": { src: "images/kids/look-04.jpg", srcset: "", hotspots: {} },
          "k-05": { src: "images/kids/look-05.jpg", srcset: "", hotspots: {} },
          "k-06": { src: "images/kids/look-06.jpg", srcset: "", hotspots: {} },
        },
      },
    },
    le = {
      tee:          { x: 50, y: 28, zoom: 1.9 },
      sweatshirt:   { x: 50, y: 30, zoom: 1.9 },
      hoodie:       { x: 50, y: 30, zoom: 1.9 },
      shirt:        { x: 50, y: 30, zoom: 1.9 },
      jacket:       { x: 50, y: 32, zoom: 1.9 },
      crop:         { x: 50, y: 26, zoom: 2.0 },
      coordtop:     { x: 50, y: 28, zoom: 2.0 },
      dress:        { x: 50, y: 50, zoom: 1.6 },
      jeans:        { x: 50, y: 65, zoom: 1.7 },
      baggy:        { x: 50, y: 65, zoom: 1.7 },
      widejeans:    { x: 50, y: 65, zoom: 1.7 },
      cargo:        { x: 50, y: 65, zoom: 1.7 },
      trousers:     { x: 50, y: 65, zoom: 1.7 },
      widetrousers: { x: 50, y: 65, zoom: 1.7 },
      joggers:      { x: 50, y: 65, zoom: 1.7 },
      shorts:       { x: 50, y: 58, zoom: 1.9 },
      sneaker:      { x: 50, y: 88, zoom: 2.6 },
      boot:         { x: 50, y: 87, zoom: 2.4 },
      heel:         { x: 50, y: 88, zoom: 2.6 },
      flat:         { x: 50, y: 89, zoom: 2.6 },
      cap:          { x: 50, y: 6,  zoom: 2.8 },
      shades:       { x: 50, y: 10, zoom: 3.2 },
      backpack:     { x: 62, y: 35, zoom: 2.0 },
    },
    Ye = { x: 50, y: 28, zoom: 2.4 },
    Je = ["tee", "sweatshirt", "hoodie", "shirt", "crop", "coordtop"];
  function X(e, t) {
    let o = Ge[e],
      s = (o && o.looks[t.id]) || { src: "", hotspots: {} },
      a = t.products.some((n) => n.type === "jacket"),
      r = {};
    return (
      t.products.forEach((n) => {
        let u = le[n.type] || le.tee;
        (a && Je.includes(n.type) && (u = Ye),
          (r[n.id] = { ...u, ...((s.hotspots && s.hotspots[n.id]) || {}) }));
      }),
      {
        src: s.src || "",
        srcset: s.srcset || "",
        aspect: s.aspect || o.aspect || 2 / 3,
        hotspots: r,
        modelName: o.modelName,
        note: o.note,
      }
    );
  }
  var p = "rgba(0,0,0,.16)",
    ne = {
      tee: (e) =>
        `<path d="M33 14 L44 10 Q50 18 56 10 L67 14 L90 30 L80 44 L69 38 L69 88 L31 88 L31 38 L20 44 L10 30 Z" fill="${e}"/><path d="M44 10 Q50 18 56 10 Q50 24 44 10Z" fill="${p}"/>`,
      sweatshirt: (e) =>
        `<path d="M33 14 L44 10 Q50 17 56 10 L67 14 L88 34 L93 78 L80 80 L69 44 L69 88 L31 88 L31 44 L20 80 L7 78 L12 34 Z" fill="${e}"/><path d="M31 80 H69 V88 H31Z M7 70 L20 72 L20 80 L7 78Z M93 70 L80 72 L80 80 L93 78Z" fill="${p}"/><path d="M44 10 Q50 17 56 10 Q50 22 44 10Z" fill="${p}"/>`,
      hoodie: (e) =>
        `<path d="M33 16 L66 16 L88 36 L93 78 L80 80 L69 44 L69 88 L31 88 L31 44 L20 80 L7 78 L12 36 Z" fill="${e}"/><path d="M32 16 Q50 -4 68 16 Q50 30 32 16Z" fill="${e}"/><path d="M37 16 Q50 4 63 16 Q50 26 37 16Z" fill="${p}"/><rect x="36" y="64" width="28" height="12" rx="3" fill="${p}"/><path d="M31 82 H69 V88 H31Z" fill="${p}"/>`,
      shirt: (e) =>
        `<path d="M33 14 L44 10 L50 20 L56 10 L67 14 L88 34 L93 80 L80 82 L69 44 L69 90 L31 90 L31 44 L20 82 L7 80 L12 34 Z" fill="${e}"/><path d="M44 10 L50 22 L56 10 L50 17Z" fill="${p}"/><path d="M50 22 V90" stroke="rgba(0,0,0,.3)" stroke-width="1.2"/><g fill="rgba(255,255,255,.8)"><circle cx="50" cy="34" r="1.3"/><circle cx="50" cy="48" r="1.3"/><circle cx="50" cy="62" r="1.3"/><circle cx="50" cy="76" r="1.3"/></g>`,
      jacket: (e) =>
        `<path d="M33 14 L44 10 Q50 17 56 10 L67 14 L88 34 L93 80 L80 82 L69 44 L69 90 L31 90 L31 44 L20 82 L7 80 L12 34 Z" fill="${e}"/><path d="M50 14 V90" stroke="rgba(255,255,255,.55)" stroke-width="1.6"/><path d="M31 82 H69 V90 H31Z M7 72 L20 74 L20 82 L7 80Z M93 72 L80 74 L80 82 L93 80Z" fill="${p}"/><path d="M44 10 Q50 17 56 10 L58 16 Q50 24 42 16Z" fill="${p}"/>`,
      crop: (e) =>
        `<path d="M33 34 L41 30 L43 12 L47 12 L48 30 L52 30 L53 12 L57 12 L59 30 L67 34 L67 66 L33 66 Z" fill="${e}"/><path d="M33 60 H67 V66 H33Z" fill="${p}"/>`,
      coordtop: (e) =>
        `<path d="M26 22 L42 16 Q50 24 58 16 L74 22 L92 36 L82 48 L74 42 L74 68 L26 68 L26 42 L18 48 L8 36 Z" fill="${e}"/><path d="M42 16 Q50 24 58 16 Q50 28 42 16Z" fill="${p}"/>`,
      dress: (e) =>
        `<path d="M38 10 L42 10 L44 24 L56 24 L58 10 L62 10 L66 34 L60 46 L84 92 L16 92 L40 46 L34 34 Z" fill="${e}"/><path d="M40 46 L60 46 L60 50 L40 50Z" fill="${p}"/><path d="M30 78 L70 78 L84 92 L16 92Z" fill="rgba(255,255,255,.1)"/>`,
      jeans: (e) =>
        `<path d="M30 8 L70 8 L74 92 L55 92 L50 38 L45 92 L26 92 Z" fill="${e}"/><path d="M30 8 H70 V15 H30Z" fill="${p}"/><path d="M50 15 V38" stroke="rgba(0,0,0,.3)" stroke-width="1"/>`,
      baggy: (e) =>
        `<path d="M26 8 L74 8 L86 94 L56 94 L50 36 L44 94 L14 94 Z" fill="${e}"/><path d="M26 8 H74 V15 H26Z" fill="${p}"/><path d="M50 15 V36" stroke="rgba(0,0,0,.3)" stroke-width="1"/>`,
      widejeans: (e) =>
        `<path d="M28 8 L72 8 L92 94 L56 94 L50 34 L44 94 L8 94 Z" fill="${e}"/><path d="M28 8 H72 V15 H28Z" fill="${p}"/><path d="M50 15 V34" stroke="rgba(0,0,0,.3)" stroke-width="1"/>`,
      cargo: (e) =>
        `<path d="M26 8 L74 8 L86 94 L56 94 L50 36 L44 94 L14 94 Z" fill="${e}"/><path d="M26 8 H74 V15 H26Z" fill="${p}"/><rect x="22" y="46" width="13" height="18" rx="2" fill="${p}"/><rect x="65" y="46" width="13" height="18" rx="2" fill="${p}"/>`,
      trousers: (e) =>
        `<path d="M32 8 L68 8 L72 94 L53 94 L50 38 L47 94 L28 94 Z" fill="${e}"/><path d="M32 8 H68 V14 H32Z" fill="${p}"/><path d="M38 20 L36 94 M62 20 L64 94" stroke="rgba(0,0,0,.18)" stroke-width="1"/>`,
      widetrousers: (e) =>
        `<path d="M28 8 L72 8 L90 94 L56 94 L50 34 L44 94 L10 94 Z" fill="${e}"/><path d="M28 8 H72 V14 H28Z" fill="${p}"/>`,
      joggers: (e) =>
        `<path d="M28 8 L72 8 L77 66 L69 92 L54 92 L50 36 L46 92 L31 92 L23 66 Z" fill="${e}"/><path d="M28 8 H72 V15 H28Z M31 84 H46 V92 H31Z M54 84 H69 V92 H54Z" fill="${p}"/>`,
      shorts: (e) =>
        `<path d="M26 14 L74 14 L82 64 L54 64 L50 38 L46 64 L18 64 Z" fill="${e}"/><path d="M26 14 H74 V21 H26Z" fill="${p}"/>`,
      sneaker: (e) =>
        `<path d="M6 64 L6 46 Q8 42 15 44 L30 48 Q37 38 46 34 L54 30 Q62 42 76 48 Q94 52 95 66 L6 66 Z" fill="${e}"/><rect x="5" y="64" width="91" height="10" rx="5" fill="#f1f0ec" stroke="rgba(0,0,0,.25)" stroke-width="1"/><path d="M40 40 L52 44 M44 36 L56 41 M48 33 L60 38" stroke="rgba(255,255,255,.7)" stroke-width="1.6" stroke-linecap="round"/><path d="M76 48 Q92 52 95 66 L80 66 Q80 54 76 48Z" fill="rgba(255,255,255,.3)"/>`,
      boot: (e) =>
        `<path d="M24 12 L50 12 L50 46 Q68 50 90 58 Q96 62 94 68 L24 68 Z" fill="${e}"/><rect x="22" y="66" width="74" height="9" rx="3" fill="#2a2420"/><path d="M24 26 H50" stroke="${p}" stroke-width="3"/>`,
      heel: (e) =>
        `<path d="M12 40 L38 50 Q58 40 80 50 Q92 56 88 62 L62 62 L34 58 L28 84 L20 84 L18 54 Z" fill="${e}"/><path d="M12 40 Q22 32 30 42" stroke="${e}" stroke-width="4" fill="none"/>`,
      flat: (e) =>
        `<path d="M10 58 Q14 46 28 48 L44 52 Q70 50 90 60 L90 68 L10 68 Z" fill="${e}"/><rect x="10" y="66" width="80" height="5" rx="2.5" fill="rgba(0,0,0,.35)"/>`,
      cap: (e) =>
        `<path d="M16 58 Q16 20 52 20 Q80 22 82 58 Z" fill="${e}"/><path d="M74 56 Q98 54 98 64 L48 64 Z" fill="${e}"/><path d="M74 56 Q98 54 98 64 L48 64 Z" fill="${p}"/><circle cx="52" cy="20" r="2.5" fill="${p}"/>`,
      shades: (e) =>
        `<rect x="10" y="38" width="34" height="24" rx="9" fill="${e}"/><rect x="56" y="38" width="34" height="24" rx="9" fill="${e}"/><path d="M44 44 Q50 40 56 44" stroke="${e}" stroke-width="3" fill="none"/><path d="M10 42 L2 38 M90 42 L98 38" stroke="${e}" stroke-width="3" stroke-linecap="round"/><path d="M16 44 L24 44 M62 44 L70 44" stroke="rgba(255,255,255,.35)" stroke-width="2" stroke-linecap="round"/>`,
      backpack: (e) =>
        `<path d="M32 22 Q32 10 50 10 Q68 10 68 22" stroke="${e}" stroke-width="4" fill="none"/><rect x="22" y="20" width="56" height="70" rx="16" fill="${e}"/><rect x="32" y="56" width="36" height="24" rx="7" fill="${p}"/><path d="M30 34 H70" stroke="${p}" stroke-width="2"/>`,
    };
  function B(e, t, o = "") {
    let s = ne[e] || ne.tee;
    return `<svg class="${o}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke="rgba(0,0,0,.35)" stroke-width="1.2" stroke-linejoin="round">${s(t)}</g></svg>`;
  }
  function ce(e, t) {
    let o = B(e, t).replace("<svg ", '<svg width="120" height="120" ');
    return "data:image/svg+xml;utf8," + encodeURIComponent(o);
  }
  var f = (e, t = "") =>
      `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${t}>${e}</svg>`,
    h = {
      search: f('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
      bag: f(
        '<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
      ),
      sun: f(
        '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
      ),
      moon: f('<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>'),
      close: f('<path d="M6 6l12 12M18 6L6 18"/>'),
      arrow: f('<path d="M5 12h14M13 6l6 6-6 6"/>'),
      left: f('<path d="M15 6l-6 6 6 6"/>'),
      right: f('<path d="M9 6l6 6-6 6"/>'),
      up: f('<path d="M6 15l6-6 6 6"/>'),
      down: f('<path d="M6 9l6 6 6-6"/>'),
      plus: f('<path d="M12 5v14M5 12h14"/>'),
      minus: f('<path d="M5 12h14"/>'),
      menu: f('<path d="M4 7h16M4 12h16M4 17h16"/>'),
      reset: f(
        '<path d="M4 4v6h6"/><path d="M5.5 14a7 7 0 1 0 1.5-7.5L4 10"/>',
      ),
      trash: f('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'),
      logo: '<svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor"><path d="M4 5h22v6H11v3h12v6H11v8H4z"/><path d="M14 5l6-0 6 6H14z" opacity=".55"/></svg>',
    };
  var d = (e, t = document) => t.querySelector(e),
    Le = (e, t = document) => [...t.querySelectorAll(e)],
    g = (e) => "\u20B9" + e.toLocaleString("en-IN"),
    O = (e, t, o) => Math.min(o, Math.max(t, e)),
    x = (e) => String(e).padStart(2, "0"),
    vt = Math.PI * 2,
    I = new Map();
  U().forEach((e) => I.set(e.p.id, e));
  var i = {
    cid: "men",
    idx: 0,
    sel: {},
    focusPid: null,
    drawerPid: null,
    panelOpen: !1,
    cart: [],
    theme: "dark",
    cartOpen: !1,
  };
  try {
    let e = JSON.parse(localStorage.getItem("f3d_cart") || "[]");
    Array.isArray(e) && (i.cart = e);
  } catch {}
  try {
    let e = localStorage.getItem("f3d_theme");
    (e === "light" || e === "dark") && (i.theme = e);
  } catch {}
  var C = () => m[i.cid],
    T = () => C().looks[i.idx],
    z = (e, t) => Object.values(e.colours[t].stock).reduce((o, s) => o + s, 0);
  function k(e) {
    let t = i.sel[e.id];
    if (!t) {
      let o = e.colours.findIndex((s, a) => z(e, a) > 0);
      (o < 0 && (o = 0), (t = i.sel[e.id] = { ci: o, size: null, qty: 1 }));
    }
    return t;
  }
  var ye = (e, t) => (t.size ? e.colours[t.ci].stock[t.size] : 0);
  function we(e, t) {
    let o = e.colours[t.ci];
    if (z(e, t.ci) === 0) return { t: "Out of stock in this colour", k: "out" };
    if (!t.size)
      return {
        t: `${Object.values(o.stock).filter((n) => n > 0).length} of ${e.sizes.length} sizes available`,
        k: "ok",
      };
    let a = o.stock[t.size];
    return a <= 0
      ? { t: "Out of stock", k: "out" }
      : a <= 5
        ? { t: `Only ${a} left`, k: "low" }
        : { t: "In stock", k: "ok" };
  }
  var M = document.documentElement,
    L = d("#panel"),
    V = d("#drawer"),
    oe = d("#cart"),
    R = d("#hotspots"),
    _ = d("#spacer"),
    Ke = d("#stage"),
    b = d("#frame"),
    ve = d("#zoomwrap"),
    te = d("#boxes"),
    c = { s: 1, fx: 0.5, fy: 0.5, w: 0, h: 0, tx: 0, ty: 0, aspect: 2 / 3 },
    y = null,
    de = null,
    he = null;
  function $e() {
    let e = window.innerWidth,
      t = window.innerHeight,
      o = e < 760,
      s = !o && e < 1100,
      a = o && (i.drawerPid || i.cartOpen);
    return {
      W: e,
      H: t,
      mobile: o,
      rui: o ? 0 : s ? 332 : 392,
      top: o ? 108 : 78,
      bottom: a ? Math.round(t * 0.58) + 10 : o ? 196 : 84,
    };
  }
  function D() {
    let e = $e(),
      t = Math.max(160, e.W - e.rui - (e.mobile ? 8 : 40)),
      o = Math.max(200, e.H - e.top - e.bottom),
      s = o,
      a = s * c.aspect;
    (a > t && ((a = t), (s = a / c.aspect)),
      Object.assign(Ke.style, {
        top: e.top + "px",
        height: o + "px",
        width: e.W - e.rui + "px",
      }),
      (b.style.width = a + "px"),
      (b.style.height = s + "px"),
      (c.w = a),
      (c.h = s),
      M.style.setProperty("--rui", e.rui + "px"),
      N());
  }
  window.addEventListener("resize", () => {
    (D(), Te());
  });
  function Ue() {
    let e = 0.5 / c.s;
    ((c.fx = O(c.fx, e, 1 - e)), (c.fy = O(c.fy, e, 1 - e)));
  }
  function N() {
    Ue();
    let { s: e, fx: t, fy: o, w: s, h: a } = c;
    ((c.tx = s / 2 - e * t * s),
      (c.ty = a / 2 - e * o * a),
      (ve.style.transform = `translate(${c.tx}px,${c.ty}px) scale(${e})`),
      (b.style.touchAction = e > 1.001 ? "none" : "pan-y"),
      b.classList.toggle("zoomed", e > 1.001),
      Se());
  }
  function xe() {
    ((c.s = 1), (c.fx = 0.5), (c.fy = 0.5), N());
  }
  var pe = new Set();
  function ue(e, t) {
    let o = m[e].looks[t];
    if (!o) return;
    let s = X(e, o);
    if (!s.src || pe.has(s.src)) return;
    pe.add(s.src);
    let a = new Image();
    ((a.decoding = "async"), (a.src = s.src));
  }
  function fe(e, t, o, s) {
    let a = m[e],
      r = document.createElement("div");
    return (
      (r.className = "ph"),
      (r.innerHTML = `<div class="ph-guide"><i></i><i></i><i></i><i></i></div>
    <div class="ph-text"><small>${a.label.toUpperCase()} \xB7 LOOK ${x(m[e].looks.indexOf(t) + 1)}</small>
    <b>Model photo goes here</b>
    <span>${o.modelName} \xB7 full body, head to toe</span>
    <em>Wearing: ${t.products.map((n) => n.name).join(" \xB7 ")}</em>
    <code>${o.src || "(no path set in models.js)"}</code>
    ${s ? "<u>File not found yet \u2014 placeholder shown</u>" : ""}</div>`),
      r
    );
  }
  function Xe(e, t, o) {
    let s = document.createElement("div");
    return (
      (s.className = "slide"),
      (s.ready = new Promise((a) => {
        if (!o.src) return (s.appendChild(fe(e, t, o, !1)), a());
        let r = new Image();
        ((r.draggable = !1),
          (r.decoding = "async"),
          (r.alt = `${o.modelName} wearing ${t.title}`),
          o.srcset &&
            ((r.srcset = o.srcset),
            (r.sizes = "(max-width: 759px) 100vw, 50vw")),
          (r.onload = () => {
            (r.decode ? r.decode() : Promise.resolve()).catch(() => {}).then(a);
          }),
          (r.onerror = () => {
            (s.replaceChildren(fe(e, t, o, !0)), a());
          }),
          (r.src = o.src),
          s.appendChild(r));
      })),
      s
    );
  }
  function _e(e, t, o) {
    ((y = X(e, t)), (c.aspect = y.aspect), D(), R.classList.add("wait"));
    let s = Xe(e, t, y);
    (s.style.setProperty("--dy", o * 22 + "px"),
      ve.insertBefore(s, te),
      (he = s),
      s.ready.then(() => {
        if (he !== s) {
          s.remove();
          return;
        }
        let a = s.querySelector("img");
        if (a && a.naturalWidth && a.naturalHeight) {
          c.aspect = a.naturalWidth / a.naturalHeight;
          D();
        }
        requestAnimationFrame(() => {
          s.classList.add("in");
          let r = de;
          ((de = s),
            r &&
              (r.classList.remove("in"),
              r.classList.add("out"),
              setTimeout(() => r.remove(), 900)),
            R.classList.remove("wait"),
            setTimeout(() => {
              (ue(e, i.idx + 1), ue(e, i.idx - 1));
            }, 400));
        });
      }));
  }
  function Me() {
    let e = i.theme === "dark",
      t = T();
    (M.style.setProperty("--bgTop", e ? t.bg.top : "#e8e9eb"),
      M.style.setProperty("--bgBot", e ? t.bg.bottom : "#a7aaaf"));
  }
  function se(e, t = !1, o) {
    let s = C();
    if (((e = O(e, 0, s.looks.length - 1)), !t && e === i.idx)) return;
    let a = o ?? (e >= i.idx ? 1 : -1);
    ((i.idx = e),
      (i.focusPid || i.drawerPid) && v(!0),
      (i.focusPid = null),
      xe(),
      _e(i.cid, T(), a),
      Me(),
      st(a),
      rt(),
      Oe(),
      at());
  }
  function j(e, t = 0, o = !0) {
    ((i.cid = e),
      (i.idx = -1),
      v(!0),
      Z(),
      Te(),
      o &&
        window.scrollTo({ top: t * window.innerHeight, behavior: "instant" }),
      et(),
      se(t, !0, 1));
    try {
      location.hash.slice(1) !== e && history.replaceState(null, "", "#" + e);
    } catch {}
  }
  function Te() {
    let e = C().looks.length;
    ((_.style.height = e * window.innerHeight + "px"), (_.innerHTML = ""));
    for (let t = 0; t < e; t++) {
      let o = document.createElement("section");
      ((o.className = "snap"),
        (o.style.height = window.innerHeight + "px"),
        (o.dataset.i = t),
        _.appendChild(o));
    }
  }
  function P(e) {
    window.scrollTo({
      top: O(e, 0, C().looks.length - 1) * window.innerHeight,
      behavior: "smooth",
    });
  }
  var ee = !1;
  window.addEventListener(
    "scroll",
    () => {
      ee ||
        ((ee = !0),
        requestAnimationFrame(() => {
          ee = !1;
          let e = Math.round(window.scrollY / window.innerHeight);
          e !== i.idx && e >= 0 && e < C().looks.length && se(e);
        }));
    },
    { passive: !0 },
  );
  function et() {
    Le("#nav [data-cid]").forEach((e) =>
      e.classList.toggle("on", e.dataset.cid === i.cid),
    );
  }
  function tt() {
    ((d("#logo").innerHTML = h.logo + "<span>FASHION<b>3D</b></span>"),
      (d("#btn-search").innerHTML = h.search),
      (d("#btn-bag").innerHTML = h.bag + '<i id="bag-n"></i>'),
      (d("#btn-theme").innerHTML = h.sun + h.moon),
      d("#nav").addEventListener("click", (e) => {
        let t = e.target.closest("[data-cid]");
        if (t) {
          (e.preventDefault(),
            t.dataset.cid !== i.cid ? j(t.dataset.cid) : P(0));
          return;
        }
        let o = e.target.closest("[data-ov]");
        o && (e.preventDefault(), be(o.dataset.ov));
      }),
      d("#logo").addEventListener("click", (e) => {
        (e.preventDefault(), i.cid !== "men" ? j("men") : P(0));
      }),
      d("#btn-search").addEventListener("click", () => be("search")),
      d("#btn-bag").addEventListener("click", () => Y()),
      d("#btn-theme").addEventListener("click", () => {
        ot(i.theme === "dark" ? "light" : "dark");
      }));
  }
  function ot(e) {
    ((i.theme = e), (M.dataset.theme = e));
    try {
      localStorage.setItem("f3d_theme", e);
    } catch {}
    y && Me();
  }
  function st(e = 1) {
    let t = C(),
      o = T(),
      s = d("#hero");
    ((s.innerHTML = `
    <div class="eyebrow">${t.eyebrow}<span> \xB7 LOOK ${x(i.idx + 1)}</span></div>
    <h1>${o.headline.map((a) => `<span>${a}</span>`).join("")}</h1>
    <p class="tag">${o.tag}</p>
    <p class="lookname">${o.title}</p>
    <button class="ghost" id="explore">${i.idx === t.looks.length - 1 ? "Back to first look" : "Explore Collection"} ${h.arrow}</button>`),
      s.classList.remove("in"),
      s.offsetWidth,
      s.classList.add("in"),
      (d("#explore").onclick = () =>
        P(i.idx === t.looks.length - 1 ? 0 : i.idx + 1)));
  }
  function at() {
    let e = C().looks.length;
    ((d("#counter").innerHTML = `
    <button class="cbtn" id="c-prev" aria-label="Previous look" ${i.idx === 0 ? "disabled" : ""}>${h.up}</button>
    <div class="cnum"><b>${x(i.idx + 1)}</b><span>/ ${x(e)}</span></div>
    <button class="cbtn" id="c-next" aria-label="Next look" ${i.idx === e - 1 ? "disabled" : ""}>${h.down}</button>
    <div class="cbar"><i style="width:${((i.idx + 1) / e) * 100}%"></i></div>`),
      (d("#c-prev").onclick = () => P(i.idx - 1)),
      (d("#c-next").onclick = () => P(i.idx + 1)));
  }
  var W = {},
    Q = {},
    it = null;
  function rt() {
    ((R.innerHTML = ""),
      (te.innerHTML = ""),
      [W, Q].forEach((e) => Object.keys(e).forEach((t) => delete e[t])),
      T().products.forEach((e, t) => {
        let s = document.createElement("button");
        ((s.className = "hs"),
          (s.dataset.pid = e.id),
          s.setAttribute("aria-label", e.name),
          (s.innerHTML = `<span class="dot"><i>${t + 1}</i></span><span class="tip"><b>${e.name}</b><em>${g(e.price)}</em></span>`),
          s.addEventListener("click", (a) => {
            (a.stopPropagation(), G(e.id));
          }),
          s.addEventListener("pointerenter", () => {
            i.focusPid || E(e.id);
          }),
          s.addEventListener("pointerleave", () => {
            i.focusPid || E(null);
          }),
          R.appendChild(s),
          (W[e.id] = s));
      }),
      Se());
  }
  function E(e) {
    ((it = e),
      Object.keys(Q).forEach((t) => Q[t].classList.toggle("on", t === e)),
      Object.keys(W).forEach((t) => W[t].classList.toggle("hov", t === e)));
  }
  function Se() {
    !y ||
      i.idx < 0 ||
      T().products.forEach((e) => {
        let t = W[e.id],
          o = y.hotspots[e.id];
        if (!t || !o) return;
        let s = c.tx + c.s * (o.x / 100) * c.w,
          a = c.ty + c.s * (o.y / 100) * c.h;
        ((t.style.left = s + "px"), (t.style.top = a + "px"));
        let r = s > -4 && s < c.w + 4 && a > -4 && a < c.h + 4;
        (t.classList.toggle("hide", !r),
          t.classList.toggle("sel", i.focusPid === e.id),
          t.classList.toggle("dim", !!i.focusPid && i.focusPid !== e.id));
      });
  }
  function lt(e) {
    let t = y && y.hotspots[e];
    t &&
      ((i.focusPid = e),
      (c.s = t.zoom || 2),
      (c.fx = t.x / 100),
      (c.fy = t.y / 100),
      N(),
      E(e),
      d("#resetfocus").classList.add("show"));
  }
  function nt() {
    ((i.focusPid = null),
      xe(),
      E(null),
      d("#resetfocus").classList.remove("show"));
  }
  function q(e) {
    ((c.s = O(c.s * e, 1, 3.4)),
      c.s <= 1.001 &&
        ((c.fx = c.fy = 0.5),
        (i.focusPid = null),
        E(null),
        d("#resetfocus").classList.remove("show")),
      N());
  }
  function ct() {
    let e = new Map(),
      t = 0,
      o = null;
    (b.addEventListener("pointerdown", (a) => {
      if (
        !a.target.closest(".hs") &&
        (e.set(a.pointerId, a),
        b.setPointerCapture(a.pointerId),
        e.size === 1 && (o = { x: a.clientX, y: a.clientY }),
        e.size === 2)
      ) {
        let [r, n] = [...e.values()];
        t = Math.hypot(r.clientX - n.clientX, r.clientY - n.clientY);
      }
    }),
      b.addEventListener("pointermove", (a) => {
        if (e.has(a.pointerId)) {
          if ((e.set(a.pointerId, a), e.size === 2)) {
            let [r, n] = [...e.values()],
              u = Math.hypot(r.clientX - n.clientX, r.clientY - n.clientY);
            (t && (b.classList.add("dragging"), q(u / t)), (t = u));
            return;
          }
          o &&
            c.s > 1.001 &&
            (b.classList.add("dragging"),
            (c.fx -= (a.clientX - o.x) / (c.s * c.w)),
            (c.fy -= (a.clientY - o.y) / (c.s * c.h)),
            (o = { x: a.clientX, y: a.clientY }),
            N());
        }
      }));
    let s = (a) => {
      (e.delete(a.pointerId),
        (t = 0),
        (o =
          e.size === 1
            ? { x: [...e.values()][0].clientX, y: [...e.values()][0].clientY }
            : null),
        e.size || b.classList.remove("dragging"));
    };
    (b.addEventListener("pointerup", s),
      b.addEventListener("pointercancel", s),
      b.addEventListener(
        "wheel",
        (a) => {
          (a.ctrlKey || a.metaKey) &&
            (a.preventDefault(), q(Math.exp(-a.deltaY * 0.0025)));
        },
        { passive: !1 },
      ),
      b.addEventListener("dblclick", (a) => {
        a.target.closest(".hs") || (c.s > 1.001 && v());
      }),
      d("#viewbar").addEventListener("click", (a) => {
        let r = a.target.closest("[data-v]");
        if (!r) return;
        let n = r.dataset.v;
        n === "in" ? q(1.25) : n === "out" ? q(1 / 1.25) : n === "reset" && v();
      }),
      d("#resetfocus").addEventListener("click", () => v()),
      (d("#viewbar").innerHTML = `
    <div class="seg"><button data-v="out" aria-label="Zoom out">${h.minus}</button><button data-v="in" aria-label="Zoom in">${h.plus}</button><button data-v="reset" aria-label="Reset view">${h.reset}</button></div>
    <span class="hint">Tap a hotspot to zoom \xB7 Scroll for next look</span>`),
      (d("#resetfocus").innerHTML = h.reset + "<span>Full look</span>"));
  }
  var dt = (e) => e.sizeLabel;
  function Ee(e, t) {
    return e.sizes
      .map((o) => {
        let s = e.colours[t.ci].stock[o];
        return `<button class="chip ${t.size === o ? "on" : ""}" data-act="size" data-pid="${e.id}" data-size="${o}" ${s <= 0 ? 'disabled title="Out of stock"' : ""}>${o}</button>`;
      })
      .join("");
  }
  function Ce(e, t) {
    return e.colours
      .map(
        (o, s) =>
          `<button class="dotc ${t.ci === s ? "on" : ""} ${z(e, s) === 0 ? "out" : ""}" style="--c:${o.hex}" data-act="colour" data-pid="${e.id}" data-ci="${s}" aria-label="${o.name}" title="${o.name}${z(e, s) === 0 ? " (sold out)" : ""}"></button>`,
      )
      .join("");
  }
  function He() {
    return T().products.reduce((e, t) => e + t.price, 0);
  }
  function Oe() {
    let e = T(),
      t = d(".plist", L)?.scrollTop || 0;
    ((L.innerHTML = `
    <div class="phead"><button class="grip" data-act="toggle" aria-label="Expand panel"><i></i></button><h3>IN THIS LOOK</h3><button class="x" data-act="collapse" aria-label="Collapse">${h.down}</button></div>
    <div class="plist">${e.products
      .map((o, s) => {
        let a = k(o),
          r = we(o, a),
          n = X(i.cid, T()),
          u = n.hotspots[o.id] || Ye,
          w = n.src
            ? `<img class="thumb-photo" src="${n.src}" alt="${o.name}" style="--thumb-x:${u.x}%;--thumb-y:${u.y}%;--thumb-zoom:${Math.min((u.zoom || 2.4) * (["sneaker", "boot", "heel", "flat"].includes(o.type) ? 2.6 : 1.65), 4.8)};object-position:${u.x}% ${u.y}%">`
            : B(o.type, o.colours[a.ci].hex);
        return `<article class="card" data-pid="${o.id}">
        <button class="thumb" data-act="open" data-pid="${o.id}" aria-label="View ${o.name}">${w}</button>
        <div class="cinfo">
          <button class="cname" data-act="open" data-pid="${o.id}"><small>${x(s + 1)}</small>${o.name}</button>
          <div class="price">${g(o.price)} <s>${g(o.mrp)}</s></div>
          <div class="row"><span class="lbl">Colour: ${o.colours[a.ci].name}</span><div class="dots">${Ce(o, a)}</div></div>
          <div class="row"><span class="lbl">${dt(o)}</span><div class="chips">${Ee(o, a)}</div></div>
          <div class="stock ${r.k}">${r.t}</div>
        </div>
        <button class="add" data-act="add" data-pid="${o.id}" ${z(o, a.ci) === 0 ? "disabled" : ""}>${h.bag}<span>Add to Bag</span></button>
      </article>`;
      })
      .join("")}</div>
    <div class="pfoot">
      <div class="total"><span>Total Outfit Price</span><b>${g(He())}</b></div>
      <button class="full" data-act="full">ADD FULL LOOK TO BAG ${h.bag}</button>
    </div>`),
      (d(".plist", L).scrollTop = t),
      L.classList.toggle("open", i.panelOpen));
  }
  function ze(e) {
    let t = e.target.closest("[data-act]");
    if (!t) return;
    let o = t.dataset.act,
      s = t.dataset.pid,
      a = s && I.get(s)?.p;
    if (o === "open") return G(s);
    if (o === "colour") {
      let r = k(a);
      return (
        (r.ci = +t.dataset.ci),
        (!r.size || a.colours[r.ci].stock[r.size] <= 0) && (r.size = null),
        (r.qty = 1),
        F()
      );
    }
    if (o === "size") {
      let r = k(a);
      return (
        (r.size = r.size === t.dataset.size ? null : t.dataset.size),
        (r.qty = 1),
        F()
      );
    }
    if (o === "add") return pt(a, t.dataset.qty);
    if (o === "qty") {
      let r = k(a),
        n = Math.min(10, ye(a, r) || 1);
      return ((r.qty = O(r.qty + +t.dataset.d, 1, n)), F());
    }
    if (o === "full") return ut();
    if (o === "toggle") {
      ((i.panelOpen = !i.panelOpen), L.classList.toggle("open", i.panelOpen));
      return;
    }
    if (o === "collapse") {
      ((i.panelOpen = !1),
        L.classList.remove("open"),
        $e().mobile || L.classList.toggle("mini"));
      return;
    }
  }
  function F() {
    (Oe(), i.drawerPid && je());
  }
  L.addEventListener("click", ze);
  V.addEventListener("click", (e) => {
    if (e.target.closest('[data-act="close"]')) return v();
    ze(e);
  });
  L.addEventListener("pointerover", (e) => {
    let t = e.target.closest(".card");
    t && !i.focusPid && E(t.dataset.pid);
  });
  L.addEventListener("pointerleave", () => {
    i.focusPid || E(null);
  });
  function G(e) {
    let t = I.get(e);
    t &&
      (t.cid !== i.cid ||
        t.li !== i.idx ||
        ((i.drawerPid = e),
        je(),
        V.classList.add("open"),
        M.classList.add("drawer-open"),
        D(),
        lt(e)));
  }
  function v() {
    ((i.drawerPid = null),
      V.classList.remove("open"),
      M.classList.remove("drawer-open"),
      nt(),
      D());
  }
  function je() {
    let e = i.drawerPid,
      t = I.get(e);
    if (!t) return;
    let { p: o, cid: s, look: a, li: r } = t,
      n = k(o),
      u = we(o, n),
      w = Math.round((1 - o.price / o.mrp) * 100),
      H = Math.min(10, ye(o, n) || 1),
      Ie = X(s, a),
      De = Ie.hotspots[o.id] || Ye,
      J = Ie.src
        ? `<img class="drawer-photo" src="${Ie.src}" alt="${o.name}" style="--drawer-x:${De.x}%;--drawer-y:${De.y}%;--drawer-zoom:${De.zoom || 2.4};object-position:${De.x}% ${De.y}%">`
        : B(o.type, o.colours[n.ci].hex);
    V.innerHTML = `
    <div class="dhead"><span>${m[s].label} \xB7 Look ${x(r + 1)}</span><button class="x" data-act="close" aria-label="Close">${h.close}</button></div>
    <div class="dbody">
      <div class="dimg">${J}<em>${o.colours[n.ci].name}</em></div>
      <h2>${o.name}</h2>
      <div class="dcat">${o.category} \xB7 ${a.title}</div>
      <div class="dprice"><b>${g(o.price)}</b><s>${g(o.mrp)}</s><span class="off">${w}% OFF</span></div>
      <div class="dsec"><div class="lbl">Colour \u2014 <strong>${o.colours[n.ci].name}</strong></div><div class="dots big">${Ce(o, n)}</div></div>
      <div class="dsec"><div class="lbl">${o.sizeLabel}${n.size ? ` \u2014 <strong>${n.size}</strong>` : ""}</div><div class="chips big">${Ee(o, n)}</div></div>
      <div class="stock ${u.k}">${u.t}</div>
      <div class="dsec qrow"><div class="lbl">Quantity</div>
        <div class="qty"><button data-act="qty" data-d="-1" data-pid="${o.id}" ${n.qty <= 1 ? "disabled" : ""}>${h.minus}</button><b>${n.qty}</b><button data-act="qty" data-d="1" data-pid="${o.id}" ${n.qty >= H || !n.size ? "disabled" : ""}>${h.plus}</button></div></div>
    </div>
    <div class="dfoot"><button class="full" data-act="add" data-pid="${o.id}" data-qty="${n.qty}" ${z(o, n.ci) === 0 ? "disabled" : ""}>ADD TO BAG \u2014 ${g(o.price * n.qty)} ${h.bag}</button></div>`;
  }
  function Be() {
    try {
      localStorage.setItem("f3d_cart", JSON.stringify(i.cart));
    } catch {}
  }
  function A() {
    return i.cart.reduce((e, t) => e + t.qty, 0);
  }
  function ht() {
    return i.cart.reduce((e, t) => e + t.qty * t.price, 0);
  }
  function ae(e, t) {
    let o = k(e),
      s = I.get(e.id),
      a = e.colours[o.ci];
    if (!o.size) return (Pe([e]), !1);
    let r = a.stock[o.size];
    if (r <= 0) return ($("That variant is out of stock"), !1);
    let n = `${e.id}|${a.name}|${o.size}`,
      u = i.cart.find((H) => H.key === n),
      w = (u ? u.qty : 0) + o.qty;
    return (
      w > r
        ? (u ? (u.qty = r) : i.cart.push(me(n, e, s, a, o, r)),
          $(`Only ${r} available in this size`))
        : u
          ? (u.qty = w)
          : i.cart.push(me(n, e, s, a, o, o.qty)),
      Be(),
      ie(),
      i.cartOpen && re(),
      t || $(`${e.name} (${a.name}, ${o.size}) added to bag`),
      !0
    );
  }
  var me = (e, t, o, s, a, r) => ({
    key: e,
    pid: t.id,
    name: t.name,
    type: t.type,
    img: ce(t.type, s.hex),
    collection: m[o.cid].label,
    cid: o.cid,
    size: a.size,
    sizeLabel: t.sizeLabel,
    colour: s.name,
    hex: s.hex,
    qty: r,
    price: t.price,
    max: s.stock[a.size],
  });
  function pt(e, t) {
    (t && (k(e).qty = +t), ae(e) && ((k(e).qty = 1), F(), We()));
  }
  function Pe(e) {
    ($(`Select a size for: ${e.map((o) => o.name).join(", ")}`),
      e.forEach((o) => {
        Le(`.card[data-pid="${o.id}"] .chips, #drawer .chips`).forEach((s) => {
          (s.classList.remove("need"), s.offsetWidth, s.classList.add("need"));
        });
      }));
    let t = d(`.card[data-pid="${e[0].id}"]`);
    t &&
      !i.drawerPid &&
      ((i.panelOpen = !0),
      L.classList.add("open"),
      t.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }
  function ut() {
    let e = T().products,
      t = e.filter((s) => !k(s).size);
    if (t.length) return Pe(t);
    let o = e.filter((s) => s.colours[k(s).ci].stock[k(s).size] <= 0);
    if (o.length) return $(`Out of stock: ${o.map((s) => s.name).join(", ")}`);
    (e.forEach((s) => ae(s, !0)), $(`Full look added \u2014 ${g(He())}`), We());
  }
  function ie() {
    let e = A(),
      t = d("#bag-n");
    ((t.textContent = e), t.classList.toggle("show", e > 0));
  }
  function We() {
    let e = d("#btn-bag");
    (e.classList.remove("bump"), e.offsetWidth, e.classList.add("bump"));
  }
  function Y(e) {
    ((i.cartOpen = e ?? !i.cartOpen),
      oe.classList.toggle("open", i.cartOpen),
      M.classList.toggle("cart-open", i.cartOpen),
      i.cartOpen && re(),
      D());
  }
  function re() {
    let e = i.cart;
    oe.innerHTML = `
    <div class="dhead"><span>Shopping Bag (${A()})</span><button class="x" data-cact="close" aria-label="Close bag">${h.close}</button></div>
    <div class="cbody">${
      e.length
        ? e
            .map(
              (t) => `
      <div class="citem">
        <img src="${t.img}" alt="">
        <div class="cmeta"><b>${t.name}</b><small>${t.collection} \xB7 ${t.colour} \xB7 ${(t.sizeLabel === "Size" || t.sizeLabel === "Age / size", "")}${t.size}</small>
          <div class="qty sm"><button data-cact="dec" data-key="${t.key}">${h.minus}</button><b>${t.qty}</b><button data-cact="inc" data-key="${t.key}" ${t.qty >= t.max ? "disabled" : ""}>${h.plus}</button></div></div>
        <div class="cright"><b>${g(t.price * t.qty)}</b><small>${t.qty > 1 ? g(t.price) + " each" : ""}</small><button class="rm" data-cact="rm" data-key="${t.key}" aria-label="Remove">${h.trash}</button></div>
      </div>`,
            )
            .join("")
        : `<div class="empty">${h.bag}<p>Your bag is empty</p><span>Add pieces from any collection \u2014 your bag follows you.</span></div>`
    }</div>
    <div class="dfoot">
      <div class="total"><span>Subtotal (${A()} item${A() === 1 ? "" : "s"})</span><b>${g(ht())}</b></div>
      <button class="full" data-cact="checkout" ${e.length ? "" : "disabled"}>CHECKOUT ${h.arrow}</button>
    </div>`;
  }
  oe.addEventListener("click", (e) => {
    let t = e.target.closest("[data-cact]");
    if (!t) return;
    let o = t.dataset.cact,
      s = i.cart.find((a) => a.key === t.dataset.key);
    if (o === "close") return Y(!1);
    if (
      (o === "inc" && s && s.qty < s.max && s.qty++,
      o === "dec" &&
        s &&
        (s.qty--, s.qty <= 0 && (i.cart = i.cart.filter((a) => a !== s))),
      o === "rm" && s && (i.cart = i.cart.filter((a) => a !== s)),
      o === "checkout")
    ) {
      $("Demo store \u2014 checkout is not connected to payments");
      return;
    }
    (Be(), ie(), re());
  });
  var S = d("#overlay");
  function be(e) {
    (v(), Y(!1));
    let t = "";
    if (
      (e === "search"
        ? (t = `<div class="mhead"><h3>Search</h3><button class="x" data-ovx>${h.close}</button></div>
      <input id="q" class="qin" type="search" placeholder="Search tees, jeans, sneakers, dresses\u2026" autocomplete="off"><div id="qres" class="qres"></div>`)
        : e === "collections"
          ? (t = `<div class="mhead"><h3>Collections</h3><button class="x" data-ovx>${h.close}</button></div>
      <div class="cgrid">${K.map((o) => `<div class="ccol"><h4>${m[o].label}</h4>${m[o].looks.map((s, a) => `<button data-go="${o}:${a}"><small>${x(a + 1)}</small>${s.title}</button>`).join("")}</div>`).join("")}</div>`)
          : e === "about"
            ? (t = `<div class="mhead"><h3>About Fashion3D</h3><button class="x" data-ovx>${h.close}</button></div>
      <p class="prose">Fashion3D is a runway you can walk around. Every look in the Men's, Women's and Kid's collections is a full-body 3D model: rotate it, zoom in on any garment, and shop each piece individually \u2014 or take the whole look home in one tap.</p>
      <p class="prose">Colours you pick are applied to the 3D garment in real time, and size availability follows the live stock of each colour.</p>`)
            : e === "contact" &&
              (t = `<div class="mhead"><h3>Contact</h3><button class="x" data-ovx>${h.close}</button></div>
      <p class="prose">Questions about sizing, orders or collaborations? Send us a note.</p>
      <form id="cform" class="cform"><input required placeholder="Your name"><input required type="email" placeholder="Email address"><textarea required rows="4" placeholder="How can we help?"></textarea><button class="full" type="submit">SEND MESSAGE</button></form>`),
      (d(".modal", S).innerHTML = t),
      (d(".modal", S).dataset.kind = e),
      S.classList.add("open"),
      e === "search")
    ) {
      let o = d("#q");
      (o.focus(), o.addEventListener("input", () => ge(o.value)), ge(""));
    }
    e === "contact" &&
      d("#cform").addEventListener("submit", (o) => {
        (o.preventDefault(),
          Z(),
          $("Thanks! This is a demo form \u2014 nothing was sent."));
      });
  }
  function Z() {
    S.classList.remove("open");
  }
  function ge(e) {
    e = e.trim().toLowerCase();
    let t = U()
      .filter(
        ({ p: o, cid: s, look: a }) =>
          !e ||
          `${o.name} ${o.category} ${o.type} ${m[s].label} ${a.title}`
            .toLowerCase()
            .includes(e),
      )
      .slice(0, 40);
    d("#qres").innerHTML = t.length
      ? t
          .map(
            ({ p: o, cid: s, li: a }) =>
              `<button data-go="${s}:${a}:${o.id}"><span class="sthumb">${B(o.type, o.colours[0].hex)}</span><span class="sinfo"><b>${o.name}</b><small>${m[s].label} \xB7 Look ${x(a + 1)} \xB7 ${o.category}</small></span><em>${g(o.price)}</em></button>`,
          )
          .join("")
      : '<p class="prose">No matches. Try \u201Cjeans\u201D, \u201Choodie\u201D or \u201Csneakers\u201D.</p>';
  }
  S.addEventListener("click", (e) => {
    if (e.target === S || e.target.closest("[data-ovx]")) return Z();
    let t = e.target.closest("[data-go]");
    if (!t) return;
    let [o, s, a] = t.dataset.go.split(":");
    (Z(), Ze(o, +s, a));
  });
  function Ze(e, t, o) {
    (e !== i.cid
      ? j(e, t)
      : t !== i.idx &&
        window.scrollTo({ top: t * window.innerHeight, behavior: "instant" }),
      o && setTimeout(() => G(o), 450));
  }
  var ke;
  function $(e) {
    let t = d("#toast");
    ((t.textContent = e),
      t.classList.add("show"),
      clearTimeout(ke),
      (ke = setTimeout(() => t.classList.remove("show"), 2600)));
  }
  window.addEventListener("keydown", (e) => {
    (e.key === "Escape" &&
      (S.classList.contains("open")
        ? Z()
        : i.cartOpen
          ? Y(!1)
          : i.drawerPid && v()),
      /INPUT|TEXTAREA/.test(document.activeElement?.tagName));
  });
  window.addEventListener("hashchange", () => {
    let e = location.hash.slice(1);
    m[e] && e !== i.cid && j(e);
  });
  function ft() {
    ((M.dataset.theme = i.theme), tt(), ct(), ie());
    let e = location.hash.slice(1);
    (j(m[e] ? e : "men", 0, !1),
      (window.__f3d = {
        state: i,
        view: c,
        switchCollection: j,
        setLook: se,
        openProduct: G,
        sel: k,
        addToCart: ae,
        jump: Ze,
        get info() {
          return y;
        },
      }),
      document.body.classList.add("ready"));
  }
  ft();
})();
