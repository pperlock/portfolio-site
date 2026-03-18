import styled from 'styled-components'

const KANBAN_CARD_BG = '#21262d'
const KANBAN_BORDER = '#30363d'
const KANBAN_TEXT = '#e6edf3'
const KANBAN_TEXT_MUTED = '#8b949e'

const DEFAULT_LABEL_BG = 'rgba(110, 118, 129, 0.4)'

/** Colors for status labels (To Do, In Progress, Done, etc.) */
const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  // To Do: purple
  'To Do': { bg: '#a371f7', color: '#fff' },
  'To do': { bg: '#a371f7', color: '#fff' },
  // In Progress: blue‑green (teal)
  'In progress': { bg: '#2ea8a1', color: '#fff' },
  'In Progress': { bg: '#2ea8a1', color: '#fff' },
  // Done: green
  Done: { bg: '#2ea043', color: '#fff' },
  'Tech Review': { bg: '#58a6ff', color: '#fff' },
  'Ready for Production': { bg: '#a371f7', color: '#fff' },
  'Ready for review': { bg: '#58a6ff', color: '#fff' },
  // Backlog: orange
  Backlog: { bg: '#f0883e', color: '#fff' },
}

export function getStatusStyle(name: string): { bg: string; color: string } {
  const normalized = STATUS_COLORS[name] ?? STATUS_COLORS[name.toLowerCase()]
  return normalized ?? { bg: DEFAULT_LABEL_BG, color: KANBAN_TEXT_MUTED }
}

export const IssueStatusPill = styled.span<{ $bg?: string; $color?: string }>`
  position: absolute;
  right: 0.6rem;
  bottom: 0.3rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: ${({ $bg }) => $bg ?? KANBAN_TEXT_MUTED};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  pointer-events: none;
`

export const GitHubIssueList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const StatusSeparator = styled.li`
  margin: 0.35rem 0 0.25rem;
  padding: 0.25rem 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${KANBAN_TEXT_MUTED};

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(110, 118, 129, 0.4);
  }

  span {
    flex-shrink: 0;
  }
`

export const GitHubIssue = styled.li`
  margin: 0;

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.375rem;
    width: 100%;
    /* extra right + bottom padding to reserve space for status text in bottom-right corner */
    padding: 0.6rem 3.75rem 1.4rem 0.75rem;
    border-radius: 8px;
    border: 1px solid ${KANBAN_BORDER};
    background: ${KANBAN_CARD_BG};
    color: ${KANBAN_TEXT};
    text-decoration: none;
    font-size: 0.8125rem;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;

    &:hover {
      border-color: #8b949e;
      background: #2d333b;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`

export const IssueCardMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const IssueId = styled.span`
  font-size: 0.75rem;
  color: ${KANBAN_TEXT_MUTED};
  font-weight: 500;
`

export const IssueTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${KANBAN_TEXT};
  line-height: 1.4;
`

export const IssueLabels = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const IssueLabel = styled.span<{ $bg?: string; $color?: string }>`
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 0.125rem 0.375rem;
  border-radius: 12px;
  background: ${({ $bg }) => $bg ?? DEFAULT_LABEL_BG};
  color: ${({ $color }) => $color ?? KANBAN_TEXT_MUTED};
`
