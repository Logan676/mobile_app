## Dealer Studio Monorepo

A multi-app monorepo containing a React Native mobile app and a Vite + React web app, with a shared TypeScript package.

### Apps and Packages
- `apps/mobile`: React Native app (iOS and Android)
- `apps/web`: Vite + React web app
- `packages/shared`: Shared TypeScript utilities, consumed by both apps as `@dealer/shared`

### Tech Stack
- **Web**: React, TypeScript, Vite, Tailwind CSS, Vitest, Testing Library, MSW, TanStack Query
- **Mobile**: React Native 0.80, React 19, Jest
- **Tooling**: npm workspaces, TypeScript project references

---

## Prerequisites
- Node.js >= 18, npm 10 (repo sets `packageManager: npm@10`)
- macOS for iOS development: Xcode + Command Line Tools
- Android development: Android Studio + SDKs, device/emulator
- Ruby for CocoaPods (mobile iOS)

Optional but recommended on macOS: Watchman for file watching.

---

## Install
Run at the repository root:

```bash
npm install
```

This installs workspace dependencies for `apps/*` and `packages/*`.

---

## Running the Web App
- Dev server:
  ```bash
  npm run web
  # or: npm -w web run dev
  ```
  The app will be available at `http://localhost:5173` by default.

- Build:
  ```bash
  npm run web:build
  # or: npm -w web run build
  ```

- Preview production build:
  ```bash
  npm -w web run preview
  ```

---

## Running the Mobile App
From the repository root:

1) Start Metro bundler:
```bash
npm run mobile
# or: npm -w mobile run start
```

2) In a new terminal, run a platform target:
```bash
# iOS (Simulator)
npm run mobile:ios
# or: npm -w mobile run ios

# Android (emulator/device)
npm run mobile:android
# or: npm -w mobile run android
```

### iOS CocoaPods setup (first run or after native deps change)
```bash
cd apps/mobile
bundle install
cd ios
bundle exec pod install
cd ../..
```

---

## Testing
- Web (Vitest):
  ```bash
  npm run web:test
  # or: npm -w web run test
  npm -w web run test:watch
  npm -w web run vitest:ui
  ```

- Mobile (Jest):
  ```bash
  npm -w mobile test
  ```

---

## Linting and Type Checking
- Lint web:
  ```bash
  npm -w web run lint
  ```
- Lint mobile:
  ```bash
  npm -w mobile run lint
  ```
- Type check all workspaces:
  ```bash
  npm run typecheck
  ```

---

## Project Scripts (root)
```json
{
  "scripts": {
    "web": "npm -w web run dev",
    "web:build": "npm -w web run build",
    "web:test": "npm -w web run test",
    "mobile": "npm -w mobile run start",
    "mobile:ios": "npm -w mobile run ios",
    "mobile:android": "npm -w mobile run android",
    "typecheck": "tsc -b"
  }
}
```

---

## Monorepo Layout
```
MobileApp/
  apps/
    mobile/        # React Native app (iOS/Android)
    web/           # Vite + React web app
  packages/
    shared/        # Shared TS package used by both apps (@dealer/shared)
  package.json     # npm workspaces + root scripts
  tsconfig.base.json
```

---

## Troubleshooting
- iOS pods: If iOS build fails, ensure CocoaPods are installed via bundler and run `cd apps/mobile/ios && bundle exec pod install`.
- Android SDK: Verify an emulator is running or a device is connected, and the correct SDK versions are installed in Android Studio.
- Clear caches: If you hit Metro/packager issues, try `watchman watch-del-all`, `rm -rf node_modules`, `npm install`, and restart Metro.

---

## Licensing
Licensed under the MIT License. See `LICENSE` for details.


