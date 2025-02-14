import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { session } from "@/utils";
// import { useHead } from "vue-meta";
import HomeView from "../views/HomeView.vue";
import QrcodeHomeView from "../views/products/QrcodeHomeView.vue";
import ShortLinksView from "../views/products/ShortLinksView.vue";
import LinkInBioView from "../views/products/LinkInBioView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/pages/qr-code",
    name: "Qr-code",
    component: QrcodeHomeView,
  },
  {
    path: "/products/pages/shorlinks",
    name: "Short-links",
    component: ShortLinksView,
  },
  {
    path: "/products/pages/link-in-bio",
    name: "LinkInBio",
    component: LinkInBioView,
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },

  {
    path: "/faq",
    name: "faq",
    component: () =>
      import(/* webpackChunkName: "faq" */ "@/views/FaqView.vue"),
  },
  {
    path: "/plans-and-pricing",
    name: "pricing",
    component: () =>
      import(/* webpackChunkName: "pricing" */ "@/views/PricingView.vue"),
  },
  {
    path: "/support",
    name: "support",
    component: () =>
      import(/* webpackChunkName: "faq" */ "@/views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { isLoggedIn: true },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/auth/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    meta: { isLoggedIn: true },
    component: () =>
      import(/* webpackChunkName: "signup" */ "@/views/auth/SignUpView.vue"),
  },
  {
    path: "/reset-password/:accesstoken",
    name: "reset-password",
    meta: { isLoggedIn: true },
    component: () =>
      import(
        /* webpackChunkName: "reset-password" */ "@/views/auth/ResetPasswordView.vue"
      ),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    meta: { isLoggedIn: true },
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "@/views/auth/ForgotPasswordView.vue"
      ),
  },
  {
    path: "/otp-verify",
    name: "otp-verify",
    meta: { isLoggedIn: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/auth/OtpView.vue"),
  },
  {
    path: "/admin",
    name: "admins",
    component: () =>
      import(
        /* webpackChunkName: "otp-verify" */ "@/views/admin/AdminView.vue"
      ),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/admin/DashboardView.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "qrcode",
        name: "Qrcode",
        component: () =>
          import(
            /* webpackChunkName: "Qrcode" */ "@/views/admin/qrs/QrcodeView.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "qrcode/create-new",
        name: "newQrcode",
        component: () =>
          import(
            /* webpackChunkName: "newQrcode" */ "@/views/admin/qrs/NewQrcode.vue"
          ),
        meta: { requiresAuth: true },
      },

      {
        path: "qrcode/edit/:id",
        name: "EditQrCode",
        component: () =>
          import(
            /* webpackChunkName: "EditQrCode" */ "@/views/admin/qrs/EditQrCode.vue"
          ),
        props: true,
        meta: { requiresAuth: true },
      },
      {
        path: "qrcode/view/:id",
        name: "staticQr",
        component: () =>
          import(
            /* webpackChunkName: "staticQr" */ "@/views/admin/qrs/ViewDetails.vue"
          ),
        props: true,
        meta: { requiresAuth: true },
      },

      {
        path: "bio",
        name: "BioLinks",
        component: () =>
          import(
            /* webpackChunkName: "BioLinks" */ "@/views/admin/bio/BioLinksView.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "bio/new",
        name: "NewBioLink",
        component: () =>
          import(
            /* webpackChunkName: "NewBioLink" */ "@/views/admin/bio/NewBioLink.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "bio/:id/links",
        name: "UpdateBioLink",
        component: () =>
          import(
            /* webpackChunkName: "NewBioLink" */ "@/views/admin/bio/UpdateBioLink.vue"
          ),
        meta: { requiresAuth: true },
        children: [
          {
            path: "linkked",
            alias: "",
            component: () =>
              import(
                /* webpackChunkName: "LinksBio" */ "@/views/admin/bio/biolinks/LinksBio.vue"
              ),
          },
          {
            path: "design",
            component: () =>
              import(
                /* webpackChunkName: "ThemeDesign" */ "@/views/admin/bio/biolinks/ThemeDesign.vue"
              ),
          },
          {
            path: "shop",
            component: () =>
              import(
                /* webpackChunkName: "ThemeDesign" */ "@/views/admin/bio/biolinks/ShopDesign.vue"
              ),
          },
          {
            path: "analytics",
            component: () =>
              import(
                /* webpackChunkName: "AnalyticsPage" */ "@/views/admin/bio/biolinks/AnalyticsPage.vue"
              ),
          },
          {
            path: "settings",
            component: () =>
              import(
                /* webpackChunkName: "SettingsPage" */ "@/views/admin/bio/biolinks/SettingsPage.vue"
              ),
          },
        ],
      },
      {
        path: "links",
        name: "UrlLinks",
        component: () =>
          import(
            /* webpackChunkName: "UrlLinks" */ "@/views/admin/urls/UrlLinksView.vue"
          ),
      },
      {
        path: "links/detail/:id",
        name: "UrlLinkDetails",
        component: () =>
          import(
            /* webpackChunkName: "UrlLinkDetails" */ "@/views/admin/urls/UrlLinkDetails.vue"
          ),
      },
      {
        path: "links/new",
        name: "NewUrlLink",
        component: () =>
          import(
            /* webpackChunkName: "NewUrlLink" */ "@/views/admin/urls/NewUrlLinkView.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "settings",
        name: "Settings",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "@/views/admin/settings/SettingsView.vue"
          ),
        meta: { requiresAuth: true },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: { noSidebar: true },
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const loggedIn = session.get("sessionData"); // Assuming this retrieves the access token or session data

  if (to.meta.isLoggedIn && loggedIn) {
    // If already logged in, redirect to the dashboard
    next("/admin/dashboard");
  } else if (to.meta.requiresAuth === true && !loggedIn) {
    // Redirect to login if route requires auth and not logged in
    next("/login");
  } else {
    next();
  }
});

export default router;
