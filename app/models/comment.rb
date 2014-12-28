class Comment < ActiveRecord::Base
	belongs_to :user
	belongs_to :medium

	validates :text, presence: true
	validate :validate_comment_length
	validate :check_bad_words

	validates :user_id,     presence: { message: 'No user_id provided'}
	validates :medium_id,   presence: { message: 'No medium_id provided' }

	def validate_comment_length
		if text.length > 255
			errors.add :text, 'Cannot contain more than 255 characters.'
		end
	end

	# Use a lexicon to detect cursing words and block comments containing them
	def check_bad_words
		bad_words ||= File.read('lib/lexicon/badwords.txt').split
		errors.add :text, "#{text} is a protected word. Please try another." if bad_words.include? text
	end
end
