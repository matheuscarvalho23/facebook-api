const reactionTypes = ['like', 'love', 'haha', 'sad', 'angry'] as const;

type ReactionTypes = typeof reactionTypes[number];

export { reactionTypes, ReactionTypes };
