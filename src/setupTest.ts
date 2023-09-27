import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import {startMock} from "@mocks/"
expect.extend(matchers)
startMock();