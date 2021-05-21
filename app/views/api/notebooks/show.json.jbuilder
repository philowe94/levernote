json.notebook do
    json.partial! 'api/notebooks/notebook', notebook: @notebook
end
json.notes({})

if @notes
    json.notes do
        @notes.each do |note|
            json.set! note.id do
                json.partial! 'api/notes/note', note: note
            end
        end
    end
end